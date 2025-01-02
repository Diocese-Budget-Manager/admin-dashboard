import { endpoint } from "../constants";

const token = localStorage.getItem("token");

// Contributions API
export const createContribution = async (data: any) => {
  try {
    const response = await fetch(`${endpoint}/contribution`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getContributions = async () => {
  try {
    const response = await fetch(`${endpoint}/contribution`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getContribution = async (id: string) => {
  try {
    const response = await fetch(`${endpoint}/contribution/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const updateContribution = async (id: string, data: any) => {
  try {
    const response = await fetch(`${endpoint}/contribution/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const deleteContribution = async (id: string) => {
  try {
    const response = await fetch(`${endpoint}/contribution/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
