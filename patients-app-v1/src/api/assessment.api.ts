import { apiClient } from "./client";

// Run AI assessment
export const runAssessment = async (sessionId: string) => {
  return apiClient(
    `/api/assessment/run/${sessionId}`,
    {
      method: "POST",
    }
  );
};

// Get assessment result
export const getAssessmentResult = async (sessionId: string) => {
  return apiClient(`/api/assessment/${sessionId}/result`);
};
