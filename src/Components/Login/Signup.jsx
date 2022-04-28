import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const userData = {
  email: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...user, [name]: value };
    setUser(data);
  };

  const signup = () => {
    const { email, password } = user;
    if (email && password) {
      alert("Signed Up Successfully");
      axios
        .post("http://localhost:5000/signup", user)
        .then((res) => console.log(res));
    } else {
      alert("Pls Enter Empty fields");
    }
  };

  return (
    <div>
      {console.log(user)}
      <div className="login">
        <h2>Signup</h2>
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
          <Button variant="contained" onClick={signup}>
            SignUp
          </Button>
          <h4>OR</h4>
          <Link className="link" to="/login">
            {" "}
            <Button variant="contained">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
