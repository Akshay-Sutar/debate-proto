const mongoose = require("mongoose");
const config = require("./index");

(async () => {
  try {
    const { mongoDB } = config;
    await mongoose.connect(mongoDB.CONNECTION_STRING, mongoDB.options);
  } catch (error) {
    console.log(error);
  }
})();
