import { Router } from "express";
import * as patientController from "../controllers/patient.controller";

const router = Router();

// Create new patient
router.post("/", patientController.createPatient);

// Get patient by ID
router.get("/:id", patientController.getPatient);

// Get patient's full health history
router.get("/:id/history", patientController.getPatientHistory);

// Update patient info
router.put("/:id", patientController.updatePatient);

// Delete patient (optional)
router.delete("/:id", patientController.deletePatient);

export default router;
