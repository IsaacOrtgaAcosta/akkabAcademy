require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const stripeRoutes = require("./routes/stripe.routes");
const userRoutes = require("./routes/user.routes");
const plansRoutes = require("./routes/plans.routes");

const app = express();
const {PORT} = require('./config/env');
app.use(cors({
    origin: "http://localhost:3000",        
    credentials: true                       
}));

// Parse the JSON request body:
app.use(express.json());

// Routes:
app.use("/api/stripe", stripeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/plans", plansRoutes);

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