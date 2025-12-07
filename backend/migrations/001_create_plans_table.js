const pool = require("../src/db");

async function up() {
  //Creamos la tabla de planes
  await pool.query(`
    CREATE TABLE IF NOT EXISTS plans (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) NOT NULL UNIQUE,          
  name VARCHAR(100) NOT NULL,                
  short_description VARCHAR(255) NULL,       
  long_description TEXT NULL,                
  billing_period ENUM('monthly','yearly') NOT NULL DEFAULT 'monthly',
  price_cents INT UNSIGNED NOT NULL,         
  currency CHAR(3) NOT NULL DEFAULT 'EUR',   
  sort_order INT UNSIGNED NOT NULL DEFAULT 1,
  is_active TINYINT(1) NOT NULL DEFAULT 1,

  stripe_product_id VARCHAR(100) NULL,       
  stripe_price_id   VARCHAR(100) NULL,       

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  removed_at TIMESTAMP NULL DEFAULT NULL
);
`);

  // Creamos la tabla de servicios (listado de lo que incluye cada plan)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS plan_services (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  plan_id INT UNSIGNED NOT NULL,
  label VARCHAR(255) NOT NULL,   
  sort_order INT UNSIGNED NOT NULL DEFAULT 1,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_plan_services_plan
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

    `);

  // Creamos la tabla de promociones para los planes
  await pool.query(`
            CREATE TABLE IF NOT EXISTS plan_promotions (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  plan_id INT UNSIGNED NOT NULL,

  title VARCHAR(100) NOT NULL,                 
  description VARCHAR(255) NULL,             

  discount_type ENUM('fixed','percent') NULL,  
  discount_amount_cents INT UNSIGNED NULL,     
  discount_percent TINYINT UNSIGNED NULL,       

  override_price_cents INT UNSIGNED NULL,      

  starts_at DATETIME NOT NULL,
  ends_at   DATETIME NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_plan_promotions_plan
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

`);
}

module.exports = {up};
