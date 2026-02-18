interface DiagnosisPrediction {
  condition: string;
  probability: number;
}

export const rankDiagnosis = async (
  knowledgeMatches: { condition: string; weight: number }[]
): Promise<DiagnosisPrediction[]> => {

  const total = knowledgeMatches.reduce((sum, k) => sum + k.weight, 0);

  return knowledgeMatches
    .map(k => ({
      condition: k.condition,
      probability: Number((k.weight / total).toFixed(2))
    }))
    .sort((a, b) => b.probability - a.probability);
};
