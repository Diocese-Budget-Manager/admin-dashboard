import { endpoint } from "../constants";

const token = localStorage.getItem("token");

export const getUsers = async () => {
  const response = await fetch(`${endpoint}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getUser = async (id: string) => {
  const response = await fetch(`${endpoint}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const createUser = async (data: any) => {
  const response = await fetch(`${endpoint}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const updateUser = async (id: string, data: any) => {
  const response = await fetch(`${endpoint}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const deleteUser = async (id: string) => {
  const response = await fetch(`${endpoint}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
