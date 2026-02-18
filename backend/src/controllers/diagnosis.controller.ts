import { Request, Response } from "express";

// Ranked diagnosis list
export const getDiagnosisRanking = async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  res.json({
    sessionId,
    diagnoses: [
      { condition: "Flu", probability: 0.6 },
      { condition: "COVID-19", probability: 0.25 },
      { condition: "Pneumonia", probability: 0.15 }
    ]
  });
};

// Detailed explanation
export const explainDiagnosis = async (req: Request, res: Response) => {
  res.json({
    explanation:
      "Symptoms suggest respiratory infection due to fever + cough pattern."
  });
};
