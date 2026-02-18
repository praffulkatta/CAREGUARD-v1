import { Request, Response } from "express";

// Get alerts
export const getAlerts = async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  res.json({
    sessionId,
    alerts: [
      {
        level: "HIGH",
        message: "Chest pain detected — seek urgent care."
      }
    ]
  });
};

// Mark viewed
export const markAlertViewed = async (req: Request, res: Response) => {
  res.json({ message: "Alert marked as viewed" });
};

// Resolve alert
export const resolveAlert = async (req: Request, res: Response) => {
  res.json({ message: "Alert resolved" });
};
