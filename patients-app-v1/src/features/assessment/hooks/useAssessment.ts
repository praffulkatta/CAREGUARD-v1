import { useState } from "react";
import { runAssessment } from "@/src/api/assessment.api";
import { AssessmentResult } from "../types";

export function useAssessment() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startAssessment = async (sessionId: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await runAssessment(sessionId);

      setResult(data);
      return data;
    } catch (err) {
      setError("Failed to run assessment");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    error,
    startAssessment,
  };
}
