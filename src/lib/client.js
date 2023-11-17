import { create } from "apisauce";
import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { Directus } from "@directus/sdk";
export const setToken = (token) => {
  Cookies.set("token", token, { expires: 1 });
};
const getToken = () => {
  return Cookies.get("token");
};

export const clearToken = () => {
  Cookies.remove("token");
};

export const apiClient = create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.addRequestTransform((request) => {
  let token = getToken();
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
});

export const handleResponse = (res) => {
  const response = [null, null];

  if (res.ok && res.data) {
    response[0] = res.data;
  } else if (!res.ok && res.data) {
    response[1] = res.data.detail;
  } else {
    response[1] = "Error connecting to server";
  }
  console.log(response);
  return response;
};

const handleQueryResponse = (res) => {
  const [data, error] = handleResponse(res);
  if (error) {
    throw new Error(error);
  }
  return data;
};

export const fetchQuery = async (url, params = {}) => {
  const res = await apiClient.get(url, params);
  return handleQueryResponse(res);
};

// export const fetchLogs =
export const supabase = createClient(
  "https://xfttaopnnhzrtkdethlo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdHRhb3Bubmh6cnRrZGV0aGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzIxMTEsImV4cCI6MjAxNTcwODExMX0.dqSi26X9f_y7SUrkfFj62k-VcG7tnY63o4J_wAT7V90"
);

export const directus = new Directus("http://45.63.7.100/");
