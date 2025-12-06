import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})

export const mongoDbUri = process.env.MONGO_URI;
export const port = process.env.PORT;
export const corOrigin = process.env.CORS_ORIGIN;