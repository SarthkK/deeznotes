import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import apiRouter from "./routes/router.js";
import { connectDB } from "./db.js";

const app = express();

connectDB();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", apiRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route at ${req.originalUrl} not found`,
  });
});

interface CustomError extends Error {
  statusCode?: number;
}
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || "Internal Server Error";

  console.error(err.stack);

  res.status(statusCode).json({
    success: false,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
