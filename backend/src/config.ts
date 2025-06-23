import dotenv from "dotenv";
import * as z from "zod";

dotenv.config();

const envSchema = z.object({
  DB_URI: z.string(),
});

const result = envSchema.safeParse(envSchema);
if (!result.success) {
  console.error("Environment variables not set up");
}
