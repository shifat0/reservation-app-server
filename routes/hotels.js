import express from "express";
import {
  countByCity,
  countByType,
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
router.get("/single/:id", getHotelById);

// GET COUNT
router.get("/count-by-city", countByCity);
router.get("/count-by-type", countByType);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
