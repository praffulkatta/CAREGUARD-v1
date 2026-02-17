# backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.8. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


# CAREGUARD Backend — Learning & Setup Guide

This README is not just setup instructions — it’s a map of **what we built**, **why we used each tool**, and **what you learned** while creating your backend.

If you ever feel lost later, come back to this file. This is your foundation.

---

## 🧭 Project Goal

Build a real backend for a healthcare-style app using:

* Express API
* PostgreSQL database (running in Docker)
* Raw SQL queries (no Prisma for now)
* Zod for validation
* TypeScript

You built the core backend cycle:

```
Request → Validation → Controller → SQL → Postgres → Response
```

This is how real production systems work.

---

## 🧱 Tech Stack Used

### 1️⃣ Node.js + Express

Used to build API endpoints.

Why:

* Fast setup
* Industry standard
* Full control over backend logic

Example:

```ts
router.post("/patients", createPatient);
```

---

### 2️⃣ PostgreSQL

Your main database.

Why:

* Reliable relational database
* Perfect for structured healthcare data
* Supports joins, constraints, transactions

You stored:

* patients
* vitals
* timelines
* medications (future)

---

### 3️⃣ Docker (for PostgreSQL)

Why Docker:

* Same environment everywhere
* Easy start/stop/reset
* No local installation problems

Container:

```
careguard-postgres
```

---

### 4️⃣ pg (Node Postgres Driver)

Used to connect Express → Postgres.

Example:

```ts
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
```

Why:

* Direct SQL control
* Learn real database thinking first

---

### 5️⃣ Zod (Validation Library)

Zod is NOT a database tool.

Its job:

➡️ Validate incoming requests before SQL runs.

Why:

* Prevent bad data
* Avoid database crashes
* Keep API predictable

Example:

```ts
const patientSchema = z.object({
  full_name: z.string(),
  age: z.number(),
});
```

Usage inside controller:

```ts
const data = patientSchema.parse(req.body);
```

Flow:

```
Request → Zod → SQL
```

---

## 🧠 Architecture You Learned

### Basic flow

```
routes
   ↓
controllers
   ↓
database (SQL)
```

### What each layer does

#### Routes

Define API URL.

```ts
router.post("/patients", createPatient);
```

---

#### Controllers

Handle request & response.

Responsibilities:

* validate input
* run SQL
* return JSON

---

#### Database

Stores data permanently.

---

## 📂 Project Structure (Current)

```
src/
 ├── controllers/
 │    └── patients.controller.ts
 ├── routes/
 │    └── patients.routes.ts
 ├── models/
 │    └── patients.model.ts   (Zod schemas)
 ├── db/
 │    └── postgres.ts
 └── app.ts
```

---

## 🧱 Database Setup

### Start Postgres container

```bash
docker ps
```

Checks running containers.

---

### Enter PostgreSQL terminal

```bash
docker exec -it careguard-postgres psql -U postgres
```

---

### Connect database

```sql
\c careguard
```

---

### List tables

```sql
\dt
```

---

### Exit psql

```sql
\q
```

Important:

* `q` ❌ (error)
* `\q` ✅ (exit command)

---

## 🗄️ Creating Table

You manually created:

```sql
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    age INT,
    gender VARCHAR(10),
    blood_group VARCHAR(5),
    city VARCHAR(100),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Why manually?

* Learn SQL fundamentals
* Understand schema before using ORMs

---

## 🚨 Common Errors You Faced (and Meaning)

### 1️⃣ relation "patients" does not exist

Meaning:

* Table was missing.

Fix:

```sql
CREATE TABLE patients (...)
```

---

### 2️⃣ 404 Route not found

Meaning:

* Route not registered.

Check:

```ts
app.use("/api", patientsRoutes);
```

---

### 3️⃣ syntax error near "q"

Cause:

You typed:

```
q
```

inside SQL terminal.

Fix:

```
\q
```

---

## 📡 API Testing

Used tools like:

* Requestly / Postman / Thunder Client

### Correct POST request

URL:

```
POST /api/patients
```

Headers:

```
Content-Type: application/json
```

Body:

```json
{
  "full_name": "Prafful Katta",
  "age": 20,
  "gender": "Male",
  "city": "Pune"
}
```

---

## ❌ What NOT to do

Wrong:

```
POST /patients?full_name=abc
```

Why wrong:

* Query params are for filtering
* POST data should go in body

---

## 🧠 Request Data Locations

| Location | Use For            | Access     |
| -------- | ------------------ | ---------- |
| params   | IDs                | req.params |
| query    | filters/search     | req.query  |
| body     | create/update data | req.body   |

---

## 🧪 Full Backend Flow You Learned

```
Request sent
   ↓
Express route matches
   ↓
Controller runs
   ↓
Zod validates input
   ↓
SQL query executes
   ↓
Postgres saves data
   ↓
JSON response returned
```

---

## 💡 Why We DID NOT Use Prisma Yet

You intentionally stayed with raw SQL because:

* Learn database fundamentals first
* Understand schemas clearly
* Better debugging skills
* Avoid abstraction too early

Prisma can be added later after mastering SQL.

---

## 🧠 Biggest Lessons Learned

* Docker running ≠ tables exist
* Database connection ≠ schema exists
* Validation happens BEFORE SQL
* Controllers should stay simple
* SQL errors teach real backend thinking

---

## 🚀 What You Can Do Now

You can already:

✔ Connect backend to Postgres
✔ Create tables manually
✔ Insert data via API
✔ Fetch data from DB
✔ Validate incoming requests using Zod
✔ Debug routes and DB errors

That is REAL backend development.

---

## 🔥 Next Recommended Steps

1. Add global error handler
2. Add Zod validation to all POST/PUT routes
3. Split controller → service layer later
4. Add `updated_at` column + update logic
5. Build timeline + vitals endpoints

---

## 🌌 Final Note

You didn’t just follow tutorials — you learned how systems connect:

```
Code ↔ Database ↔ Requests ↔ Validation
```

Most beginners never fully understand this.

Now you do.

Keep building.
