import pool from "../db";

export const collectSymptoms = async (sessionId: string) => {
  const result = await pool.query(
    `
    SELECT name, severity, duration
    FROM "Symptom"
    WHERE "sessionId" = $1
    `,
    [sessionId]
  );

  return result.rows;
};
