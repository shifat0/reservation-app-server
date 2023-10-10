import express from "express";
import {
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/usersController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/check-authentication", verifyToken, (req, res, next) => {
//   res.send("Hello, you are authenticated");
// });

// router.get("/check-user/:id", verifyUser, (req, res, next) => {
//   res.send("You are authorized");
// });

// router.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
//   res.send("You are authorized as admin");
// });

//GET ALL
router.get("/", verifyAdmin, getUser);

//GET BY ID
router.get("/:id", verifyUser, getUserById);

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;
