import { useState, useEffect } from "react";
import { endpoint } from "../utils/constants";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userToken = localStorage.getItem("token");

  const fetchUser = async () => {
    try {
      const response = await fetch(`${endpoint}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const user = await response.json();
      if (user.message) {
        setUser(null);
      } else {
        setUser(user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, isAuthenticated };
};
