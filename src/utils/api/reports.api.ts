import { endpoint } from "../constants";

const token = localStorage.getItem("token");

export const getReports = async () => {
  const response = await fetch(`${endpoint}/reports`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getReport = async (id: string) => {
  const response = await fetch(`${endpoint}/reports/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

