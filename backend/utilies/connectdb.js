const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "mysql",
  port: "3306",
  user: "user",
  password: "pass",
  database: "mydb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
