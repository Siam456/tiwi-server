const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
const dotenv = require("dotenv");
const userHandler = require("./routes/user");
var cors = require("cors");
const moduleHandler = require("./routes/module");
const tutorialHandler = require("./routes/tutorials");

const db = require("./model");

const app = express();
dotenv.config();
app.use(express.json());
app.use("/static", express.static("public"));
app.set("view engine", "ejs");
app.use(cors());

(async () => {
  try {
    await db.sequelize.sync();
    console.log("db connected");
  } catch (err) {
    console.log(err.message);
  }
})();

// routes
app.get("/", function (req, res) {
  res.render("index");
});
app.use("/api/users", userHandler);
app.use("/api/modules", moduleHandler);
app.use("/api/tutorials", tutorialHandler);
// app.use("/conversation", conversationHandler);

//error handler
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    console.log(err.message);
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(5000, () => {
  console.log("server is connected successfully at port 5000");
});
