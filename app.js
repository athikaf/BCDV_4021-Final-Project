var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const config = require("./config");
var mongoose = require("mongoose");
const Accounts = require("./models/account");
const Transactions = require("./models/transactions");

const url = config.mongourl;
const connect = mongoose.connect(url);

connect.then(
  (db) => {
    console.log("connected to server");
  },
  (err) => {
    console.log(err);
  }
);

var accountsRouter = require("./routes/accounts");
var transactionRouter = require("./routes/transactions");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/accounts", accountsRouter);
app.use("/transactions", transactionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
