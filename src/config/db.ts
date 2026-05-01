import mongoose from "mongoose";
import { DB_NAME, MONGO_URI } from "./envConfig";

export const dbConnection = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}`, {
      dbName: DB_NAME,
    });

    console.log("✅ Database connected successfully");
  } catch (error: any) {
    console.error("❌ DB Error:", error.message);
    // process.exit(1);
  }
};