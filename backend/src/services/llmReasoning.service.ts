export const generateInsights = async (
  riskLevel: string,
  diagnoses: any[]
) => {
  return {
    summary: `Possible condition: ${diagnoses[0]?.condition}`,
    explanation:
      "Based on symptom patterns and knowledge rules.",
    nextAction:
      riskLevel === "high"
        ? "Seek urgent medical care."
        : "Monitor and consult if symptoms worsen."
  };
};

