import { z } from "zod";

/* =====================================================
   PATIENT PROFILE
===================================================== */

export const patientSchema = z.object({
  full_name: z.string().min(2).max(255),
  age: z.number().int().min(0).max(120).optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  blood_group: z.string().max(5).optional(),
  profile_photo: z.string().url().optional(),
  city: z.string().max(100).optional(),
  address: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  emergency_contact_name: z.string().max(255).optional(),
  emergency_contact_phone: z.string().max(15).optional(),
});

export type PatientInput = z.infer<typeof patientSchema>;


/* =====================================================
   MEDICAL HISTORY
===================================================== */

export const medicalHistorySchema = z.object({
  condition: z.string().min(2),
  diagnosed_date: z.string().optional(),
  status: z.enum(["active", "resolved", "chronic"]).default("active"),
  notes: z.string().optional(),
});

export type MedicalHistoryInput = z.infer<typeof medicalHistorySchema>;


/* =====================================================
   ALLERGIES
===================================================== */

export const allergySchema = z.object({
  allergy_name: z.string().min(2),
  severity: z.enum(["mild", "moderate", "severe"]).optional(),
});

export type AllergyInput = z.infer<typeof allergySchema>;


/* =====================================================
   HEALTH TIMELINE
===================================================== */

export const healthTimelineSchema = z.object({
  event_type: z.enum([
    "call",
    "doctor_visit",
    "home_visit",
    "lab_test",
    "emergency",
    "medication",
  ]),
  title: z.string().min(2),
  description: z.string().optional(),
  data: z.any().optional(), // flexible JSONB
  risk_score: z.number().min(0).max(100).optional(),
  event_date: z.string().optional(),
  related_id: z.number().optional(),
});

export type HealthTimelineInput = z.infer<typeof healthTimelineSchema>;


/* =====================================================
   VITALS
===================================================== */

export const vitalsSchema = z.object({
  blood_pressure_systolic: z.number().int().optional(),
  blood_pressure_diastolic: z.number().int().optional(),
  heart_rate: z.number().int().optional(),
  temperature: z.number().optional(),
  blood_sugar: z.number().int().optional(),
  oxygen_saturation: z.number().int().min(0).max(100).optional(),
  weight: z.number().optional(),
  recorded_by: z.enum(["patient", "worker", "doctor"]).optional(),
  notes: z.string().optional(),
});

export type VitalsInput = z.infer<typeof vitalsSchema>;


/* =====================================================
   MEDICATIONS
===================================================== */

export const medicationSchema = z.object({
  name: z.string().min(2),
  dosage: z.string().optional(),
  frequency: z.string().optional(),
  prescribed_by: z.number().optional(),
  prescribed_date: z.string().optional(),
  start_date: z.string(),
  end_date: z.string().optional(),
  active: z.boolean().optional(),
  compliance_percentage: z.number().min(0).max(100).optional(),
  notes: z.string().optional(),
});

export type MedicationInput = z.infer<typeof medicationSchema>;
