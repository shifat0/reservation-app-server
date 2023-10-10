import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotelById,
  updateHotel,
} from "../controllers/hotelsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

//GET ALL
router.get("/", getHotel);

//GET BY ID
router.get("/:id", getHotelById);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
