import { v4 as uuidv4 } from "uuid";
import pool from "../db";

export const addSymptom = async (req: { params: { sessionId: any; }; body: { symptom: any; severity: any; duration: any; }; }, res: { json: (arg0: any) => void; }) => {
  const { sessionId } = req.params;
  const { symptom, severity, duration } = req.body;

  const result = await pool.query(
    `
    INSERT INTO "Symptom"
    ("sessionId", name, severity, duration)
    VALUES ($1,$2,$3,$4)
    RETURNING *
    `,
    [sessionId, symptom, severity, duration]
  );

  res.json(result.rows[0]);
};


export const startSession = async (req: { body: { patientId: any; }; }, res: { json: (arg0: { sessionId: any; }) => void; }) => {
  const { patientId } = req.body;

  const sessionId = uuidv4();

  await pool.query(
    `
    INSERT INTO "SymptomSession"
    (id, "patientId", status, "createdAt")
    VALUES ($1,$2,'active', NOW())
    `,
    [sessionId, patientId]
  );

  res.json({ sessionId });
};