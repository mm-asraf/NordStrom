const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const connectDB = require("./config/db");
const app = express();

//load config
dotenv.config({ path: "./config.env" });
connectDB();

//passport config
require("./config/passport")(passport);

//Body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("Server is running!");
});
