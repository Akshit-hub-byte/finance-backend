import express from "express";
import { summary } from "../controllers/dashboardController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/summary",authMiddleware,summary);

export default router;