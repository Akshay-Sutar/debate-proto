const config = require("dotenv");
config.config();

module.exports = {
  Server: {
    PORT: process.env.APP_PORT,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  mongoDB: {
    CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
    options:{
      
    }
  },
};
