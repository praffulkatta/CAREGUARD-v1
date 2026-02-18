interface RiskResult {
  riskLevel: "low" | "medium" | "high" | "critical";
  score: number;
  triggeredRules: string[];
}

export const analyzeRisk = async (
  symptoms: { name: string; severity: number }[]
): Promise<RiskResult> => {

  let score = 0;
  const triggeredRules: string[] = [];

  const names = symptoms.map(s => s.name.toLowerCase());

  // Example rule engine
  if (names.includes("chest pain")) {
    score += 0.5;
    triggeredRules.push("CHEST_PAIN_ALERT");
  }

  if (names.includes("shortness of breath")) {
    score += 0.4;
    triggeredRules.push("BREATHING_DIFFICULTY_ALERT");
  }

  let riskLevel: RiskResult["riskLevel"] = "low";

  if (score >= 0.8) riskLevel = "critical";
  else if (score >= 0.6) riskLevel = "high";
  else if (score >= 0.3) riskLevel = "medium";

  return {
    riskLevel,
    score,
    triggeredRules
  };
};
