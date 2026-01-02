const express = require('express');
const { stripe } = require('../lib/stripe');
const { APP_URL } = require('../config/env');

const router = express.Router();

router.post("/checkout", async (req, res) => {
    try {        
        const {priceId} = req.body;
        if(!priceId || typeof priceId !== "string" || !priceId.startsWith("price_")){
            return res.status(400).json({ok: false, message: "Invalid priceId"});
        }

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [{price: priceId, quantity: 1}],

            success_url: `${APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${APP_URL}/checkout/cancel`,
        });

        if(!session.url){
            return res.status(500).json({ok: false, message: "Stripe session URL missing"});
        }

        return res.json({ ok: true, url: session.url});

    } catch (error) {
        return res.status(500).json({ok: false, message: error.message || "Server error"});
    }
})

module.exports = router;