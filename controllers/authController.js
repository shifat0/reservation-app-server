import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/errorHandler.js";

export const createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(401, "User not found"));
    const passwordCheck = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordCheck) return next(createError(401, "Wrong Password"));

    res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    next(err);
  }
};
