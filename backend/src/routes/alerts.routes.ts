import { Router } from "express";
import * as alertController from "../controllers/alert.controller";

const router = Router();

// Get alerts for a session
router.get("/:sessionId", alertController.getAlerts);

// Mark alert as viewed
router.post("/:alertId/viewed", alertController.markAlertViewed);

// Resolve alert (doctor reviewed)
router.post("/:alertId/resolve", alertController.resolveAlert);

export default router;
