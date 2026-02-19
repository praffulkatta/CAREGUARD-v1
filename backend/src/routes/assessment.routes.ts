import { Router } from "express";
import * as assessmentController from "../controllers/assessment.controller";
import { startAssessment } from "../controllers/assessment.controller";

const router = Router();

// Run full assessment pipeline
// router.post("/run/:sessionId", assessmentController.runAssessment);

// Get assessment result
// router.get("/:sessionId/result", assessmentController.getResult);

// Re-run assessment (after new symptoms added)
// router.post("/rerun/:sessionId", assessmentController.rerunAssessment);



router.post("/start", startAssessment);

export default router;
