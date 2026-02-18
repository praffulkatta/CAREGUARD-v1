interface KnowledgeMatch {
  condition: string;
  weight: number;
}

export const matchMedicalKnowledge = async (
  symptoms: { name: string }[]
): Promise<KnowledgeMatch[]> => {
  const matches: KnowledgeMatch[] = [];

  const symptomNames = symptoms.map(s => s.name.toLowerCase());

  if (symptomNames.includes("chest pain")) {
    matches.push({ condition: "Heart Attack", weight: 0.8 });
    matches.push({ condition: "Angina", weight: 0.6 });
  }

  if (symptomNames.includes("fever")) {
    matches.push({ condition: "Viral Infection", weight: 0.7 });
  }

  return matches;
};
