import dotenv from "dotenv"
dotenv.config()

const { PORT, MONGO_URI, DB_NAME } = process.env;

export { PORT, MONGO_URI, DB_NAME }