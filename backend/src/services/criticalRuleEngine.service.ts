interface CriticalRuleResult {
  isCritical: boolean;
  riskLevel?: "high" | "critical";
  triggeredRules: string[];
  alertMessage?: string;
}

export const checkCriticalRules = (
  symptoms: { name: string }[]
): CriticalRuleResult => {
  const names = symptoms.map(s => s.name.toLowerCase());

  const triggeredRules: string[] = [];

  // 🔥 Rule 1: Possible cardiac emergency
  if (
    names.includes("chest pain") &&
    names.includes("sweating")
  ) {
    triggeredRules.push("POSSIBLE_CARDIAC_EVENT");

    return {
      isCritical: true,
      riskLevel: "critical",
      triggeredRules,
      alertMessage: "Possible cardiac emergency detected."
    };
  }

  return {
    isCritical: false,
    triggeredRules
  };
};
