import pool from "../db";

export const saveAssessmentResult = async (
  sessionId: string,
  risk: any,
  diagnoses: any[]
) => {

  // 1️⃣ Save main assessment
  const assessmentResult = await pool.query(
    `
    INSERT INTO "AssessmentResult"
    ("sessionId", "riskLevel", "riskScore")
    VALUES ($1,$2,$3)
    RETURNING id
    `,
    [sessionId, risk.riskLevel, risk.score]
  );

  const assessmentId = assessmentResult.rows[0].id;

  // 2️⃣ Save diagnoses
  for (const d of diagnoses) {
    await pool.query(
      `
      INSERT INTO "Diagnosis"
      ("assessmentId", condition, probability)
      VALUES ($1,$2,$3)
      `,
      [assessmentId, d.condition, d.probability]
    );
  }

  // 3️⃣ Save alerts if critical
  if (risk.riskLevel === "critical") {
    await pool.query(
      `
      INSERT INTO "Alert"
      ("assessmentId", level, message)
      VALUES ($1,$2,$3)
      `,
      [
        assessmentId,
        "critical",
        "Possible cardiac emergency detected."
      ]
    );
  }
};
