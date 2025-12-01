require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.DB_HOST || "db",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.USER || "user",
    password: process.env.DB_PASSWORD || "secret",
    database: process.env.DB_NAME || "akkab_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;