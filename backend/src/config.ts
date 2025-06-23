import dotenv from "dotenv";
import * as z from "zod";

dotenv.config();

const envSchema = z.object({
  DB_URI: z.string().min(1),
  PORT: z.string(),
  JWT_SECRET: z.string(),
});

const result = envSchema.safeParse(process.env);
if (!result.success) {
  console.error("Environment variables not set up");
  process.exit(1);
}

export const { DB_URI, PORT, JWT_SECRET } = result.data;
