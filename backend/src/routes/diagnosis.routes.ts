import { Router } from "express";
import * as diagnosisController from "../controllers/diagnosis.controller";

const router = Router();

// Get ranked diagnosis list
router.get("/:sessionId", diagnosisController.getDiagnosisRanking);

// Get detailed diagnosis explanation
router.get("/:sessionId/explain", diagnosisController.explainDiagnosis);

export default router;
