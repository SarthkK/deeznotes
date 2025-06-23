import mongoose from "mongoose";
import { DB_URI } from "./config.js";
export async function connectDB() {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log("Connected to database");
  } catch (err: any) {
    console.log("Databse connection failed");
    console.error(err.message || err);
    process.exit(1);
  }
}
