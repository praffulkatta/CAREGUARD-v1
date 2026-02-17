import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import health from "./routes/health.routes";
import patients from "./routes/patients.routes";
import { errorHandler } from "./middlewares/error.middleware";


const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ===== Routes =====
app.use("/api/health", health);
app.use("/api", patients)



// ===== Error Handler (ALWAYS LAST) =====
app.use(errorHandler);

export default app;
