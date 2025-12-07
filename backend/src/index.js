require("dotenv").config();
const express = require("express");
const pool = require("./db");
const userRoutes = require("./routes/user.routes");
const plansRoutes = require("./routes/plans.routes"); 

const app = express();
const PORT = process.env.PORT || 4000;

// Parse the JSON request body:
app.use(express.json());

// Routes:
app.get("/api/users", userRoutes);
app.get("/api/plans", plansRoutes);

// Middelware for errors:
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.statusCode || 500;
    res.status(status).json({
        ok: false,
        message: err.message || "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening in ${PORT} port`);
});