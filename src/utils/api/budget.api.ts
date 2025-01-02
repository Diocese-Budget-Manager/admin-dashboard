import { endpoint } from "../constants";

const token = localStorage.getItem("token");

export const getBudgets = async () => {
  const response = await fetch(`${endpoint}/budgets`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getBudget = async (id: string) => {
  const response = await fetch(`${endpoint}/budgets/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const createBudget = async (data: any) => {
  const response = await fetch(`${endpoint}/budgets`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const updateBudget = async (id: string, data: any) => {
  const response = await fetch(`${endpoint}/budgets/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const deleteBudget = async (id: string) => {
  const response = await fetch(`${endpoint}/budgets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};