const express = require("express");
const app = express();
const users = [];

const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const config = require("./config");
require("./config/database.config");

process.on("uncaughtException", (...params) => {
  console.log(params);
});

process.on("unhandledRejection", (...params) => {
  console.log(params);
});

const initializePassport = require("./passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: config.Server.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.use(require("./route"));

app.listen(config.Server.PORT, () => {
  console.log(`Server started at ${config.Server.PORT}`);
});
