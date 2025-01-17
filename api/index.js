import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode
  const message = err.message
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})