import Stripe from "stripe";
const { STRIPE_SECRET_KEY } = require("../config/env");

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

module.exports = {stripe};