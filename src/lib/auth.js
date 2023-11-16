import { apiClient, handleResponse } from "./client";

export const authLogin = async (payload) => {
  const res = await apiClient.post("/auth/login", payload);
  return handleResponse(res);
};

export const getAuthUser = async () => {
  const res = await apiClient.get("/auth/me");
  return handleResponse(res);
};
