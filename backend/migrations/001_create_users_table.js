const pool = require("../src/db");

async function up() {
  //Creamos roles de tabla
  await pool.query(`
        CREATE TABLE IF NOT EXISTS roles(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE
        );
    `);

  await pool.query(`
        INSERT IGNORE INTO roles (id, name) VALUES 
            (1, 'admin'), 
            (2, 'teacher'), 
            (3, 'student')
        `);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            lastname VARCHAR(255),
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role_id INT UNSIGNED NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            removed_at TIMESTAMP NULL DEFAULT NULL,
            CONSTRAINT fk_users_role FOREIGN KEY (role_id) REFERENCES roles(id)
        );
    `);
}

module.exports = {up};