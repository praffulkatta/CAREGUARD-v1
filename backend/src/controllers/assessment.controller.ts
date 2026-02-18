import { Request, Response } from "express";
import { runAssessmentPipeline } from "../services/assessmentPipeline.service";

// Run full assessment pipeline
export const runAssessment = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;

    // 🔥 call real pipeline
    const result = await runAssessmentPipeline(sessionId);

    // return full result
    res.json(result);

  } catch (error) {
    console.error("Assessment error:", error);

    res.status(500).json({
      message: "Assessment failed"
    });
  }
};

// Get assessment result
export const getResult = async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  res.json({
    sessionId,
    status: "completed",
    riskLevel: "medium"
  });
};

// Re-run assessment
export const rerunAssessment = async (req: Request, res: Response) => {
  res.json({ message: "Assessment re-run triggered" });
};
