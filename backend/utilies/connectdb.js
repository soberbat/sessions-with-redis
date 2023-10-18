const mysql = require("mysql2");
require("dotenv").config();

const { DB_HOSTNAME, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const pool = mysql.createPool({
//   host: DB_HOSTNAME,
//   port: DB_PORT,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

const pool = mysql.createPool({
  host: "34.30.78.127",
  port: "3306",
  user: "berat",
  password: "ysxgdil0",
  database: "mydb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
