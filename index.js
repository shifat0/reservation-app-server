import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw error;
  }
};

//Middlewears
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const api = process.env.API;
app.use(`${api}`, router);

// Error Handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    status: err.status,
    message: err.message || "Something went wrong",
    stack: err.stack,
  });
});

mongoose.connection.on("disconnected", () =>
  console.log("mongoDB disconnected")
);
mongoose.connection.on("connected", () => console.log("mongoDB connected"));

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Listening on Port ${process.env.PORT}`);
});
