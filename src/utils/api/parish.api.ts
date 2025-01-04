import { endpoint } from "../constants";

const token = localStorage.getItem("token");

// Parishes API
export const createParish = async (data: any) => {
  try {
    const response = await fetch(`${endpoint}/parish`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log("Error creating parish:", error);
    return error;
  }
};

export const getParishes = async () => {
  try {
    const response = await fetch(`${endpoint}/parish`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getParish = async (id: string) => {
  try {
    const response = await fetch(`${endpoint}/parish/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const updateParish = async (id: string, data: any) => {
  try {
    const response = await fetch(`${endpoint}/parish/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const deleteParish = async (id: string) => {
  try {
    const response = await fetch(`${endpoint}/parish/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
