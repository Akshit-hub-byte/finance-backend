import express from "express";
import { summary,getRecentActivity,getMonthlyTrends,getCategoryTotals } from "../controllers/dashboardController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getRecords } from "../controllers/recordController.js";

const router = express.Router();

router.get("/summary",authMiddleware,summary);
router.get("/filter",authMiddleware, getRecords );
router.get("/recent", authMiddleware, getRecentActivity);
router.get("/monthly-trends", authMiddleware, getMonthlyTrends);
router.get("/category-totals", authMiddleware, getCategoryTotals);

export default router;