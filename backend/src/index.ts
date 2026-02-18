import app from "./app";
import { PORT } from "./config/env";
import pool from "./config/db"
import express from "express"
import cors from "cors"



// Middlewares
app.use(express.json())
app.use(cors())


app.get("/h", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is: ${result.rows[0].current_database}`);
});







app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
