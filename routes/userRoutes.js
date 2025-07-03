import express from "express";
import { verifToken } from "../middlewares/authMiddleware.js";
import { allowRoles } from "../middlewares/allowRoles.js";
import User from "../models/userModels.js";

const router = express.Router();

router.get("/admin", verifToken, allowRoles("admin"), async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.json({
      message: "Admin Dashboard - All Users",
      users: users,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

router.get("/manager", verifToken, (req, res) => {
    res.json({ message: "welcome manager" });
});

router.get("/user", verifToken, (req, res) => {
    res.json({ message: "welcome user" });
});

export default router;
