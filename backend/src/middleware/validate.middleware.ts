import { Request, Response, NextFunction } from "express";

export const validateRequiredFields =
  (fields: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const missingFields = fields.filter(
      (field) => !req.body[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing fields: ${missingFields.join(", ")}`,
      });
    }

    next();
  };
