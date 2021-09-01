const bcrypt = require("bcrypt");
const userService = require("../service/user.service");

class UserController {
  constructor() {
    this.registerUser = this.registerUser.bind(this);
  }

  async registerUser(req, res, next) {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const userObj = { userName: name, userEmail: email, password: hashed };
    try {
      const user = await userService.createUser(userObj);
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await userService.authUser({ email, password });
      if (!user) {
        res.redirect("/login");
      }
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
