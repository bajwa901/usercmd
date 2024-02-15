require("dotenv").config();
const mysql = require('mysql2');

const connection = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.getConnection((error) => {
  if (error) console.log(error);
  else console.log("Successfully connected to the database.");
});

module.exports = connection;