import { Router } from "express";
import { getPatient, createPatient, patientsEmergency, patientsmedicatons, patientsTimeline, patientsVitals, updatePatient } from "../controllers/patients.controller"




const router = Router();

router.get("/patients/me", getPatient)
router.put("/patients/me", updatePatient)
router.post("/patients", createPatient);

router.post("/patients/me/emergency-contact", patientsEmergency);
router.get("/patients/:id/timeline", patientsTimeline);
router.post("/patients/:id/timeline", patientsTimeline);
router.get("/patients/:id/vitals", patientsVitals);
router.post("/patients/:id/vitals", patientsVitals);
router.get("/patients/:id/medications", patientsmedicatons);
router.post("/patients/:id/medications", patientsmedicatons);
router.post("/patients/:id/medications/:medId", patientsmedicatons);




export default router;