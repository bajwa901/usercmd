require("dotenv").config();
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      connectionLimit: process.env.DB_CONNECTION_LIMIT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./src/migrations",
    },
  },
};
