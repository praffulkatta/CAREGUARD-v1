import { Request, Response, NextFunction } from "express";
import pool from "../config/db";

export const getPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM patients WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    return res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};



/* =====================================================
   PUT /patients/me
===================================================== */
export const updatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // later → from auth middleware
    const patientId = 1;

    const {
      full_name,
      age,
      gender,
      blood_group,
      city,
      address
    } = req.body;

    const result = await pool.query(
      `
      UPDATE patients
      SET
        full_name = $1,
        age = $2,
        gender = $3,
        blood_group = $4,
        city = $5,
        address = $6,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *
      `,
      [
        full_name,
        age,
        gender,
        blood_group,
        city,
        address,
        patientId,
      ]
    );

    return res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

/* =====================================
   POST /patients
===================================== */
export const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      full_name,
      age,
      gender,
      city,
      address
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO patients
      (full_name, age, gender, city, address)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [full_name, age, gender, city, address]
    );

    return res.status(201).json({
      success: true,
      message: "Patient created",
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /patients/me/emergency-contact
 */
export const patientsEmergency = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const emergencyContact = req.body;

    // TODO: save emergency contact in DB

    return res.status(201).json({
      success: true,
      message: "Emergency contact saved",
      data: emergencyContact,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /patients/:id/timeline
 * POST /patients/:id/timeline
 */
export const patientsTimeline = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (req.method === "GET") {
      // TODO: fetch timeline from DB
      return res.status(200).json({
        success: true,
        message: "Timeline fetched",
        data: [],
      });
    }

    if (req.method === "POST") {
      const timelineEntry = req.body;

      // TODO: insert timeline record

      return res.status(201).json({
        success: true,
        message: "Timeline entry added",
        data: { patientId: id, ...timelineEntry },
      });
    }

    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /patients/:id/vitals
 * POST /patients/:id/vitals
 */
export const patientsVitals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (req.method === "GET") {
      // TODO: fetch vitals from DB
      return res.status(200).json({
        success: true,
        message: "Vitals fetched",
        data: [],
      });
    }

    if (req.method === "POST") {
      const vitals = req.body;

      // TODO: insert vitals entry

      return res.status(201).json({
        success: true,
        message: "Vitals added",
        data: { patientId: id, ...vitals },
      });
    }

    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /patients/:id/medications
 * POST /patients/:id/medications
 * POST /patients/:id/medications/:medId
 */
export const patientsmedicatons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, medId } = req.params;

    if (req.method === "GET") {
      // TODO: fetch medications
      return res.status(200).json({
        success: true,
        message: "Medications fetched",
        data: [],
      });
    }

    if (req.method === "POST") {
      const medication = req.body;

      // If medId exists → update specific medication
      if (medId) {
        // TODO: update medication
        return res.status(200).json({
          success: true,
          message: "Medication updated",
          data: { patientId: id, medId, ...medication },
        });
      }

      // Otherwise create medication
      // TODO: create new medication
      return res.status(201).json({
        success: true,
        message: "Medication added",
        data: { patientId: id, ...medication },
      });
    }

    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    next(error);
  }
};
