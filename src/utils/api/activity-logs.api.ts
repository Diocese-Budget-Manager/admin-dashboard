import { endpoint } from "../constants";

const token = localStorage.getItem("token");

export const getActivityLogs = async () => {
  const response = await fetch(`${endpoint}/activity-logs`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getActivityLog = async (id: string) => {
  const response = await fetch(`${endpoint}/activity-logs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};