# 🩺 CAREGUARD Backend

**AI-Powered Symptom Analysis Pipeline**

A modular healthcare backend built with **Express + TypeScript + PostgreSQL**, designed to perform symptom analysis, risk detection, diagnosis ranking, and intelligent insight generation.

This system follows a **layered AI architecture**, inspired by clinical decision-support workflows used in modern healthcare platforms.

---

## 🧠 System Pipeline

The backend processes health assessments through multiple intelligence layers working together:

```
Symptom Collection
        ↓
Medical Knowledge Engine
        ↓
Risk Analysis Engine
        ↓
Critical Rule Engine (Safety Layer)
        ↓
Diagnosis Ranking Engine
        ↓
LLM Reasoning Layer
        ↓
Insights & Alerts
```


<img width="1727" height="542" alt="diagram-export-2-18-2026-3_07_36-PM" src="https://github.com/user-attachments/assets/a7c70f62-3ae0-4df1-969d-edc5f7ee2dea" />

---

## 🧩 Architecture Overview

### 1️⃣ Symptom Collection Layer

Collects and normalizes symptoms associated with a patient session.

**Service:**
`src/services/symptomCollector.service.ts`

**Responsibilities**

* Fetch symptom data
* Normalize formats
* Prepare structured input for analysis

---

### 2️⃣ Medical Knowledge Engine

Matches symptoms against known medical conditions.

**Service:**
`src/services/medicalKnowledge.service.ts`

**Responsibilities**

* Symptom ↔ condition mapping
* Medical rule matching
* Knowledge-based scoring

---

### 3️⃣ Risk Analysis Engine

Calculates overall risk level based on symptom severity and patterns.

**Service:**
`src/services/riskAnalysis.service.ts`

**Responsibilities**

* Risk scoring
* Triggered safety rules
* Severity estimation

**Example Rules**

* Chest pain → risk increase
* Breathing difficulty → high alert

---

### 4️⃣ Critical Rule Engine (Safety Layer)

Overrides normal logic when dangerous symptom combinations are detected.

**Service:**
`src/services/criticalRuleEngine.service.ts`

**Example**

```
Chest pain + sweating
→ CRITICAL risk
→ Emergency alert
```

This layer ensures patient safety by prioritizing emergency conditions.

---

### 5️⃣ Diagnosis Ranking Engine

Ranks possible conditions based on probability scores.

**Service:**
`src/services/diagnosisRanking.service.ts`

**Output**

* Differential diagnosis list
* Probability ranking

---

### 6️⃣ LLM Reasoning Layer

Transforms analysis into human-readable explanations.

**Service:**
`src/services/llmReasoning.service.ts`

**Responsibilities**

* Explain reasoning
* Provide next steps
* Generate summary insights

---

### 7️⃣ Assessment Pipeline (Core Orchestrator)

Central engine that connects all layers.

**Service:**
`src/services/assessmentPipeline.service.ts`

**Pipeline Flow**

```
collectSymptoms()
   → matchMedicalKnowledge()
   → analyzeRisk()
   → checkCriticalRules()
   → rankDiagnosis()
   → generateInsights()
```

---

## 🚀 API Endpoints

**Base URL**

```
http://localhost:5001/api
```

---

### 👤 Patient APIs

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | /patients             | Create patient      |
| GET    | /patients/:id         | Get patient details |
| GET    | /patients/:id/history | Patient timeline    |

**Example**

```json
POST /api/patients
{
  "name": "Rahul",
  "age": 28,
  "gender": "male"
}
```

---

### 🤒 Symptom APIs

| Method | Endpoint                         | Description           |
| ------ | -------------------------------- | --------------------- |
| POST   | /symptoms/session/start          | Start symptom session |
| POST   | /symptoms/session/:sessionId/add | Add symptom           |
| GET    | /symptoms/session/:sessionId     | Get session symptoms  |

**Example**

```json
POST /api/symptoms/session/session-001/add
{
  "symptom": "chest pain",
  "duration": "2 hours",
  "severity": 8
}
```

---

### 🧠 Assessment APIs (Main AI Pipeline)

| Method | Endpoint                      | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | /assessment/run/:sessionId    | Run full assessment   |
| GET    | /assessment/:sessionId/result | Get assessment result |
| POST   | /assessment/rerun/:sessionId  | Re-run analysis       |

---

## 🩺 Example Assessment Output

```json
{
  "sessionId": "session-001",
  "symptoms": [
    { "name": "chest pain", "severity": 8, "duration": "2 hours" },
    { "name": "sweating", "severity": 6, "duration": "1 hour" }
  ],
  "risk": {
    "riskLevel": "critical",
    "score": 0.5,
    "triggeredRules": [
      "CHEST_PAIN_ALERT",
      "POSSIBLE_CARDIAC_EVENT"
    ]
  },
  "diagnoses": [
    { "condition": "Heart Attack", "probability": 0.57 },
    { "condition": "Angina", "probability": 0.43 }
  ],
  "insights": {
    "summary": "Possible condition: Heart Attack",
    "explanation": "Based on symptom patterns and safety rules.",
    "nextAction": "Seek urgent medical attention."
  }
}
```

---

## ⚙️ Middleware

Implemented middleware includes:

* Request logger
* Async handler
* Validation middleware
* Error handler
* 404 handler

---

## 🏗️ Project Structure

```
src/
├── routes/
├── controllers/
├── services/
├── models/
├── middleware/
└── app.ts
```

---

## 🧪 Typical Testing Flow

1. Create patient
2. Start symptom session
3. Add symptoms
4. Run assessment pipeline
5. Receive risk score, diagnosis, and insights

---

## 🔥 Current Status

* ✔ Layered assessment pipeline
* ✔ Risk analysis engine
* ✔ Critical safety overrides
* ✔ Diagnosis ranking
* ✔ Insight generation
* ✔ Modular service architecture

---

## 🔮 Planned Next Steps

* Persist assessments to PostgreSQL timeline
* Alert storage & notification system
* ML-based risk prediction
* Real LLM integration
* Doctor escalation workflow
* Voice AI symptom intake

---

## ⚠️ Disclaimer

This system is an experimental AI decision-support prototype.
It is **not** intended for real medical diagnosis or emergency decision-making.
