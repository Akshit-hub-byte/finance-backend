import express from "express";
import { createRecord,getRecords } from "../controllers/recordController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware,authorize("admin"),createRecord);

router.get("/",authMiddleware,authorize("admin","analyst"),getRecords);

export default router;