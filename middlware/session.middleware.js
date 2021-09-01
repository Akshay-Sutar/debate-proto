class SessionMiddleware {
  constructor() {
    this.checkAuthenticated = this.checkAuthenticated.bind(this);
    this.checkNotAuthenticated = this.checkNotAuthenticated.bind(this);
  }
  checkAuthenticated(req, res, next) {
    console.log("req.isAuthenticated()", req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }

  checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    next();
  }
}

module.exports = new SessionMiddleware();
