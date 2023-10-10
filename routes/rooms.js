import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRoomById,
  updateRoom,
} from "../controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//GET ALL
router.get("/", getRoom);

//GET BY ID
router.get("/:id", getRoomById);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

export default router;
