const { Router } = require("express");
const UserController = require("../controller/user.controller");
const router = Router();

router.post("/register", UserController.registerUser);
router.post("/login", UserController.login);

router.get("/register", (req, res, next) => {
  res.render("../views/register.ejs");
});
router.get("/login", (req, res, next) => {
  res.render("../views/login.ejs");
});

module.exports = router;
