const pool = require("../db");

class PlansModel {
  static async findAll() {
    const [rows] = await pool.query(
      "SELECT id, code, name, short_description, long_description, billing_period, price_cents, currency, stripe_product_id, stripe_price_id FROM plans where removed_at IS NULL and is_active = 1 ORDER BY sort_order"
    );
    return rows;
  }

  static async findById(id) {
    const [plan] = await pool.query(
      `SELECT id, code, name, short_description, long_description, billing_period, price_cents, currency, stripe_product_id, stripe_price_id FROM plans where removed_at IS NULL and is_active = 1 AND id = ?`,
      [id]
    );
    return plan[0] || null;
  }

  static async createPlan({
    code,
    name,
    short_description,
    long_description,
    billing_period,
    price_cents,
    currency,
    is_active,
    stripe_product_id,
    stripe_price_id,
  }) {
    const [result] = await pool.query(
      `INSERT INTO plans
        (code, 
        name, 
        short_description, 
        long_description, 
        billing_period, 
        price_cents, 
        currency, 
        is_active,
        stripe_product_id, 
        stripe_price_id)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        code,
        name,
        short_description,
        long_description,
        billing_period,
        price_cents,
        currency,
        is_active,
        stripe_product_id,
        stripe_price_id,
      ]
    );
    return { id: result.insertId, code, name };
  }

  static async getAllPlanServices () {
    const [ rows ] = await pool.query(
      `SELECT * FROM plan_services ORDER BY sort_order`
    );

    return rows;
  }
}

module.exports = PlansModel;
