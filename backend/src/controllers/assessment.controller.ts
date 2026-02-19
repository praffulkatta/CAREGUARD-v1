import { v4 as uuidv4 } from "uuid";
import pool from "../db";
import { AssessmentResult, runAssessmentPipeline } from "../services/assessmentPipeline.service";

export async function startAssessment(req: { body: { patientId: any; symptoms: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): void; new(): any; }; }; json: (arg0: AssessmentResult) => void; }): Promise<void> {
  try {
    const { patientId, symptoms } = req.body;

    if (!patientId || !symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body"
      });
    }

    // 1️⃣ Create session
    const sessionId = uuidv4();

    await pool.query(
      `
      INSERT INTO "SymptomSession"
      (id, "patientId", status, "createdAt")
      VALUES ($1,$2,'active', NOW())
      `,
      [sessionId, patientId]
    );

    // 2️⃣ Insert symptoms
    for (const s of symptoms) {
      await pool.query(
        `
        INSERT INTO "Symptom"
        ("sessionId", name, severity, duration, "createdAt")
        VALUES ($1,$2,$3,$4,NOW())
        `,
        [sessionId, s.name, s.severity, s.duration]
      );
    }

    // 3️⃣ Run full pipeline
    const result = await runAssessmentPipeline(sessionId);

    // 4️⃣ Return result
    res.json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Assessment failed"
    });
  }
}
