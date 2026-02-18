// 🔥 CHANGE ONLY THIS when IP changes
export const API_BASE_URL = "http://192.168.1.3:5001";

export async function apiClient(
  endpoint: string,
  options?: RequestInit
) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
