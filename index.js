import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw error;
  }
};

app.use(express.json());
const api = process.env.API;
app.use(`${api}/auth`, authRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/hotels`, hotelsRouter);
app.use(`${api}/rooms`, roomsRouter);
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
