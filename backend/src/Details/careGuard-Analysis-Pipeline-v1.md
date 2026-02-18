CAREGUARD Backend — AI Symptom Analysis Pipeline

A modular healthcare backend built with Express + TypeScript + PostgreSQL, designed to perform symptom analysis, risk detection, diagnosis ranking, and intelligent insights generation.

This project follows a layered AI architecture inspired by real clinical decision-support systems.

🧠 System Pipeline

The backend processes health assessments using multiple intelligence layers:

User Symptoms
      ↓
Symptom Collection Layer
      ↓
Medical Knowledge Engine
      ↓
Risk Analysis Engine
      ↓
Critical Rule Engine (Safety Override)
      ↓
Diagnosis Ranking Engine
      ↓
LLM Reasoning Layer
      ↓
Insights + Alerts + Next Action

🧩 Architecture Overview
1️⃣ Symptom Collection Layer

Collects symptoms associated with a session.

Service:
src/services/symptomCollector.service.ts

Responsibilities:

Fetch symptom data

Normalize symptom format

Prepare input for analysis

2️⃣ Medical Knowledge Engine

Matches symptoms to known medical conditions.

Service:
src/services/medicalKnowledge.service.ts

Responsibilities:

Symptom-condition mapping

Medical rule matching

Knowledge-based scoring

3️⃣ Risk Analysis Engine

Calculates overall risk level.

Service:
src/services/riskAnalysis.service.ts

Responsibilities:

Risk scoring

Triggered safety rules

Severity estimation

Example rules:

Chest pain → risk increase

Breathing difficulty → high alert

4️⃣ Critical Rule Engine (Safety Layer)

Overrides normal logic for dangerous symptom combinations.

Service:
src/services/criticalRuleEngine.service.ts

Example:

Chest pain + sweating
→ CRITICAL risk
→ emergency alert


This ensures patient safety by prioritizing emergency conditions.

5️⃣ Diagnosis Ranking Engine

Ranks possible conditions based on probabilities.

Service:
src/services/diagnosisRanking.service.ts

Output:

Differential diagnosis list

Probability scores

6️⃣ LLM Reasoning Layer

Generates human-readable insights.

Service:
src/services/llmReasoning.service.ts

Responsibilities:

Explain reasoning

Provide next actions

Summarize findings

7️⃣ Assessment Pipeline (Core Orchestrator)

Service:
src/services/assessmentPipeline.service.ts

This orchestrates all layers:

collectSymptoms()
   → matchMedicalKnowledge()
   → analyzeRisk()
   → checkCriticalRules()
   → rankDiagnosis()
   → generateInsights()

🚀 API Endpoints

Base URL:

http://localhost:5001/api

👤 Patient APIs
Method	Endpoint	Description
POST	/patients	Create patient
GET	/patients/:id	Get patient
GET	/patients/:id/history	Patient timeline
Example Request
POST /api/patients
{
  "name": "Rahul",
  "age": 28,
  "gender": "male"
}

🤒 Symptom APIs
Method	Endpoint	Description
POST	/symptoms/session/start	Start symptom session
POST	/symptoms/session/:sessionId/add	Add symptom
GET	/symptoms/session/:sessionId	Get session symptoms
Example
POST /api/symptoms/session/session-001/add
{
  "symptom": "chest pain",
  "duration": "2 hours",
  "severity": 8
}

🧠 Assessment APIs (Main AI Pipeline)
Method	Endpoint	Description
POST	/assessment/run/:sessionId	Run full assessment
GET	/assessment/:sessionId/result	Get result
POST	/assessment/rerun/:sessionId	Re-run analysis
🩺 Example Assessment Output
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

⚙️ Middleware

Implemented middleware:

Request logger

Error handler

404 handler

Async handler

Validation middleware

🏗️ Project Structure
src/
├── routes/
├── controllers/
├── services/
├── models/
├── middleware/
└── app.ts

🧪 Testing Flow

Create patient

Start symptom session

Add symptoms

Run assessment pipeline

Receive risk + diagnosis + insights

🔥 Current Status

✔ Layered assessment pipeline
✔ Risk analysis engine
✔ Critical rule overrides
✔ Diagnosis ranking
✔ Insight generation
✔ Modular service architecture

🔮 Planned Next Steps

Persist assessments to PostgreSQL timeline

Alert storage system

ML-based risk prediction

Real LLM integration

Doctor escalation workflow

Voice AI symptom intake

⚠️ Disclaimer

This system is an experimental AI decision-support prototype.
It is not intended for real medical diagnosis or emergency decisions.