require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/hello', (req, res,) => {
    res.json({ message: 'Hola desde el backend en Docker'})
});

app.get("/api/db-check", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT NOW() AS now");
        res.json({ok: true, time: rows[0].now});
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: "Error connecting to DB"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});