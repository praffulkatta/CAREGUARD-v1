import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";



import { requestLogger } from "./middleware/logger.middleware";
import { notFound } from "./middleware/notFound.middleware";
import { errorHandler } from "./middleware/error.middleware";



import patientRoutes from "./routes/patient.routes";
import symptomRoutes from "./routes/symptom.routes";
import assessmentRoutes from "./routes/assessment.routes";
import diagnosisRoutes from "./routes/diagnosis.routes";
import alertsRoutes from "./routes/alerts.routes";


const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// Logger
app.use(requestLogger);



// ===== Routes =====





// ====================================


// Route registrations
app.use("/api/patients", patientRoutes);
app.use("/api/symptoms", symptomRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/diagnosis", diagnosisRoutes);
app.use("/api/alerts", alertsRoutes);


// ===== Error Handler (ALWAYS LAST) =====
// 404 handler
app.use(notFound);

// Global error handler (ALWAYS LAST)
app.use(errorHandler);


export default app;
