import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import uploadFile from "../middlewares/multer.middleware.js";
const router = express.Router();
router.post("/register", uploadFile, registerUser);
export default router;
