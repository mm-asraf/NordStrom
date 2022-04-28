import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const userData = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...user, [name]: value };
    setUser(data);
  };

  const login = ({ setLoginUser }) => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      if (res.data.message === "login succesfully") {
        navigate("/products");
      }
    });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {console.log(user)}
      <div className="cont">
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <br />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        <br />
        <Button variant="contained" onClick={login}>
          Login
        </Button>
        <h4>OR</h4>
        <Link className="link" to="/signup">
          <Button variant="contained">Signup</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
