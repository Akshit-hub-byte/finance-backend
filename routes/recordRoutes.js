import express from "express";
import { createRecord,getRecords,updateRecord,softDeleteRecord } from "../controllers/recordController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware,authorize("admin"),createRecord);

router.get("/",authMiddleware,authorize("admin","analyst"),getRecords);
router.put("/:id", authMiddleware, authorize("admin"), updateRecord);

router.patch("/soft-delete/:id",authMiddleware,authorize("admin"),softDeleteRecord);


export default router;