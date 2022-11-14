require("dotenv").config();

module.exports = {
    HOST:  '127.0.0.1',
    USER: "ankita",
    PASSWORD: "test",
    DB: "team",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
};