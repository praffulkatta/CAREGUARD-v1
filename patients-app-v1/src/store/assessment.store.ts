import { useState } from "react";
import { AssessmentResult } from "../features/assessment/types";

export function useAssessmentStore() {
  const [assessment, setAssessment] =
    useState<AssessmentResult | null>(null);

  return {
    assessment,
    setAssessment,
  };
}
