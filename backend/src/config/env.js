export const env = {
    PORT: Number(process.env.PORT || 4000),
    APP_URL: process.env.APP_URL || "http://localhost:3000",
    STRYPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
};

if(!env.STRIPE_SECRET_KEY){
    throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}