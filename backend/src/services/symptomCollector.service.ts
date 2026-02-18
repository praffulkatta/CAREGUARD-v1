export interface CollectedSymptom {
  name: string;
  severity: number;
  duration: string;
}

export const collectSymptoms = async (sessionId: string) => {
  // TODO: fetch from DB
  const symptoms: CollectedSymptom[] = [
    { name: "chest pain", severity: 8, duration: "2 hours" },
    { name: "sweating", severity: 6, duration: "1 hour" }
  ];

  return symptoms;
};
