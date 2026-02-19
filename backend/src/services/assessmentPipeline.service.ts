import { collectSymptoms } from "./symptomCollector.service";
import { matchMedicalKnowledge } from "./medicalKnowledge.service";
import { analyzeRisk } from "./riskAnalysis.service";
import { rankDiagnosis } from "./diagnosisRanking.service";
import { generateInsights } from "./llmReasoning.service";
import { checkCriticalRules } from "./criticalRuleEngine.service";
import { saveAssessmentResult } from "./saveAssessment.service";


export interface AssessmentResult {
  sessionId: string;
  symptoms: any[];
  risk: {
    riskLevel: string;
    score: number;
    triggeredRules: string[];
  };
  diagnoses: {
    condition: string;
    probability: number;
  }[];
  insights: {
    summary: string;
    explanation: string;
    nextAction: string;
  };
}


// ==============================
// MASTER PIPELINE FUNCTION
// ==============================

/**
 * Runs FULL assessment flow
 *
 * Flow:
 * Symptoms → Knowledge → Risk → Critical Rules →
 * Diagnosis → LLM Insights → Final Result
 */
export const runAssessmentPipeline = async (
  sessionId: string
): Promise<AssessmentResult> => {

  // ---------------------------------
  // 1️⃣ Symptom Collection Layer
  // Fetches symptoms linked to session
  // ---------------------------------
  const symptoms = await collectSymptoms(sessionId);


  // ---------------------------------
  // 2️⃣ Medical Knowledge Engine
  // Finds possible conditions
  // ---------------------------------
  const knowledgeMatches =
    await matchMedicalKnowledge(symptoms);


  // ---------------------------------
  // 3️⃣ Risk Analysis Engine
  // Calculates risk score + rule triggers
  // ---------------------------------
  const risk = await analyzeRisk(symptoms);


  // ---------------------------------
  // 4️⃣ Critical Rule Engine (SAFETY)
  // Overrides risk if emergency detected
  // ---------------------------------
  const criticalCheck = checkCriticalRules(symptoms);

  if (criticalCheck.isCritical) {
    risk.riskLevel = criticalCheck.riskLevel!;
    risk.triggeredRules.push(
      ...criticalCheck.triggeredRules
    );
  }


  // ---------------------------------
  // 5️⃣ Diagnosis Ranking Engine
  // Converts matches into probabilities
  // ---------------------------------
  const diagnoses =
    await rankDiagnosis(knowledgeMatches);


  // ---------------------------------
  // 6️⃣ LLM Reasoning Layer
  // Generates explanation for humans
  // ---------------------------------
  const insights =
    await generateInsights(risk.riskLevel, diagnoses);



  await saveAssessmentResult(
  sessionId,
  risk,
  diagnoses
);


  // ---------------------------------
  // 7️⃣ Final unified response
  // ---------------------------------
  return {
    sessionId,
    symptoms,
    risk,
    diagnoses,
    insights,
  };
};