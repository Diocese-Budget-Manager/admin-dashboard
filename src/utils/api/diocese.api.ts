import { endpoint } from "../constants";

const token = localStorage.getItem("token");

export const getDioceses = async () => {
  const response = await fetch(`${endpoint}/dioceses`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getDiocese = async (id: string) => {
  const response = await fetch(`${endpoint}/dioceses/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const createDiocese = async (data: any) => {
  const response = await fetch(`${endpoint}/dioceses`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const updateDiocese = async (id: string, data: any) => {
  const response = await fetch(`${endpoint}/dioceses/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const deleteDiocese = async (id: string) => {
  const response = await fetch(`${endpoint}/dioceses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

