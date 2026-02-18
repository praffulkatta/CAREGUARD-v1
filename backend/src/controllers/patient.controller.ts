import { Request, Response } from "express";

// Create patient
export const createPatient = async (req: Request, res: Response) => {
  const { name, age, gender } = req.body;

  // TODO: save to DB
  const patient = {
    id: 1,
    name,
    age,
    gender
  };

  res.status(201).json(patient);
};

// Get patient
export const getPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    id,
    name: "Demo Patient",
    age: 30
  });
};

// Get patient history
export const getPatientHistory = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    patientId: id,
    sessions: []
  });
};

// Update patient
export const updatePatient = async (req: Request, res: Response) => {
  res.json({ message: "Patient updated" });
};

// Delete patient
export const deletePatient = async (req: Request, res: Response) => {
  res.json({ message: "Patient deleted" });
};
