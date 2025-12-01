const fs = require("fs");
const path = require("path");
const pool = require("./src/db");

async function run() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS migrations (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            run_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            `);

        const migrationsDir = path.join(__dirname, "migrations");
        const files = fs
            .readdirSync(migrationsDir)
            .filter((f) => f.endsWith("js"))
            .sort();
        
        for (const file of files) {
            const name = file;
            
            const [rows] = await pool.query(
                "SELECT id FROM migrations WHERE name = ?",
                [name]
            );

            if(rows.lengt > 0){
                console.log(`Migración ya realizada, se omite: ${name}`);
                continue;
            }

            console.log(`Ejecutando migración: ${name}`);
            const migration = require(path.join(migrationsDir, file));

            if (typeof migration.up === "function") {
                await migration.up();
                await pool.query(
                    "INSERT INTO migrations (name) VALUES (?)",
                    [name]
                )
                console.log(`Migración completada: ${name}`);
            }else{
                console.log(`Migración sin función up(): ${name}`);
            }
        }

        console.log("Todas las migraciones ejecutadas");
        process.exit(0);
    } catch (error) {
        console.error("Error ejecutando migraciones: ", error);
        process.exit(1);
    }
}

run();