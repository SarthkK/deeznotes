import express from "express";
import * as z from "zod";
import User from "../models/user.js";
import { comparePassword, hashPassword } from "../utils/hashPass.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const authRouter = express.Router();

const signUpSchema = z.object({
  name: z.string().min(1).trim(),
  email: z.string().email().trim(),
  password: z.string(),
});

authRouter.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    const result = signUpSchema.safeParse(userData);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Invalid inputs",
      });
      return;
    }
    const { name, email, password } = result.data;
    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({
        success: false,
        message: "User already exists",
      });
      return;
    }
    // return user with jwt cookie

    // hash password
    const hashedPassword = await hashPassword(password);
    const token = jwt.sign({ email }, JWT_SECRET);

    const savedUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.status(200).json({
      success: true,
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

authRouter.post("/login", async (req, res) => {
  try {
    const credentials = req.body;
    const result = loginSchema.safeParse(credentials);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Invalid inputs",
      });
      return;
    }
    const { email, password } = result.data;
    // retrieve user from server
    const savedUser = await User.findOne({ email }).select("+password");
    if (!savedUser) {
      res.status(401).json({
        success: false,
        message: "User does not exist",
      });
      return;
    }
    // compare passwords
    const valid = await comparePassword(savedUser.password, password);
    if (!valid) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }
    const token = jwt.sign({ email }, JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default authRouter;
