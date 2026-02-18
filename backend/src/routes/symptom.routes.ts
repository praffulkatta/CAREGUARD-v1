import { Router } from "express";
import * as symptomController from "../controllers/symptom.controller";

const router = Router();

// Start new symptom session
router.post("/session/start", symptomController.startSession);

// Add symptom to session
router.post("/session/:sessionId/add", symptomController.addSymptom);

// Get all symptoms in a session
router.get("/session/:sessionId", symptomController.getSession);

// Update symptom
router.put("/session/:sessionId/symptom/:symptomId", symptomController.updateSymptom);

// Delete symptom
router.delete("/session/:sessionId/symptom/:symptomId", symptomController.deleteSymptom);

export default router;
