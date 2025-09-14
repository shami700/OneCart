import express from "express";
import dotenv from "dotenv";
import connectDb from "../backend/config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "../backend/routes/authRoutes.js";
import cors from "cors";
import userRoutes from "../backend/routes/userRoutes.js";
import productRoutes from "../backend/routes/productRoutes.js";
import cartRoutes from "../backend/routes/cartRoutes.js";
import orderRoutes from "../backend/routes/orderRoutes.js";

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

export default app;

export const handler = app;
