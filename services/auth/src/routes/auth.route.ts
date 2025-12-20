import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import uploadFile from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", uploadFile, registerUser);
router.post("/login", loginUser);

export default router;
