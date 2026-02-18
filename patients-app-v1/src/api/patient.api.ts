import { apiClient } from "./client";

export const createPatient = async (data: {
  name: string;
  age: number;
  gender: string;
}) => {
  return apiClient("/api/patients", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getPatient = async (id: string) => {
  return apiClient(`/api/patients/${id}`);
};
