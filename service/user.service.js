const userModel = require("../model/user.model");

class User {
  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  async createUser(userObj) {
    try {
      const user = new userModel(userObj);
      return await user.save();
    } catch (error) {
      throw error;
    }
  }

  async authUser({ email, password }) {
    try {
      const user = await userModel.find({ userEmail: email }).exec();
      if (user.length) {
        return {
          id: user[0]._id,
          email: user[0].userEmail,
          name: user[0].userName,
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new User();
