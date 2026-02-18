import { Request, Response } from "express";

// Start symptom session
export const startSession = async (req: Request, res: Response) => {
  const { patientId } = req.body;

  const session = {
    id: "session-001",
    patientId,
    createdAt: new Date()
  };

  res.status(201).json(session);
};

// Add symptom
export const addSymptom = async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const { symptom, duration, severity } = req.body;

  res.status(201).json({
    message: "Symptom added",
    sessionId,
    symptom,
    duration,
    severity
  });
};

// Get session symptoms
export const getSession = async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  res.json({
    sessionId,
    symptoms: []
  });
};

// Update symptom
export const updateSymptom = async (req: Request, res: Response) => {
  res.json({ message: "Symptom updated" });
};

// Delete symptom
export const deleteSymptom = async (req: Request, res: Response) => {
  res.json({ message: "Symptom deleted" });
};
