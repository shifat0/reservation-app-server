import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotelById,
  updateHotel,
} from "../controllers/hotelsController.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

//GET ALL
router.get("/", getHotel);

//GET BY ID
router.get("/:id", getHotelById);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

export default router;
