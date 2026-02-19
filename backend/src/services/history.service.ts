import pool from "../db";

export const getPatientHistory = async (patientId: string) => {

  const result = await pool.query(
    `
    SELECT
      ss.id AS session_id,
      ss."createdAt",
      ar."riskLevel",
      ar."riskScore"
    FROM "SymptomSession" ss
    LEFT JOIN "AssessmentResult" ar
      ON ss.id = ar."sessionId"
    WHERE ss."patientId" = $1
    ORDER BY ss."createdAt" DESC
    `,
    [patientId]
  );

  return result.rows;
};
