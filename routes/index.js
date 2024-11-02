import { Router } from "express";
import authRouter from "./auth.js";
import usersRouter from "./users.js";
import hotelsRouter from "./hotels.js";
import roomsRouter from "./rooms.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/hotels", hotelsRouter);
router.use("/rooms", roomsRouter);

export default router;
