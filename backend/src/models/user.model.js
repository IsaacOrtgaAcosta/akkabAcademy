const pool = require("../db");

class UserModel {
  static async findAll() {
    const [rows] = await pool.query(
      `SELECT id, name, email FROM user WHERE email = ? AND pass = ?`
    );
    [email, password];
    return rows;
  }

  static async findById(id) {
    const [user] = await pool.query(
      `SELECT id, name, email FROM users WHERE id = ?`,
      [id]
    );
    return user[0] || null;
  }

  static async create({ name, email, password }) {
    const [result] = await pool.query(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, password]
    );
    return { id: result.insertId, name, email };
  }
}

module.exports = UserModel;