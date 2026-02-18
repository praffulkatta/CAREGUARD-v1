export interface Diagnosis {
  condition: string;
  probability: number;
}

export interface Risk {
  riskLevel: "low" | "medium" | "high" | "critical";
  score: number;
  triggeredRules: string[];
}

export interface Insights {
  summary: string;
  explanation: string;
  nextAction: string;
}

export interface AssessmentResult {
  sessionId: string;
  symptoms: any[];
  risk: Risk;
  diagnoses: Diagnosis[];
  insights: Insights;
}
