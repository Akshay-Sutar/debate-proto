const { Router } = require("express");
const SessionMiddleware = require("../middlware/session.middleware");
const router = Router();

route.get("/", SessionMiddleware.checkAuthenticated, (req, res) => {
  res.render("index.ejs", { user: req.user.name });
});

route.get("/login", SessionMiddleware.checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

route.get("/register", SessionMiddleware.checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

route.post(
  "/login",
  SessionMiddleware.checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

route.post(
  "/register",
  SessionMiddleware.checkNotAuthenticated,
  async (req, res) => {
    try {
      const hashed = await bcrypt.hash(req.body.password, 10);
      users.push({
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        password: hashed,
      });

      res.redirect("/login");
    } catch (error) {
      res.redirect("/register");
    }
  }
);

route.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = router;
