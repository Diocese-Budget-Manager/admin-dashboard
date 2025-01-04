import { useState, useEffect } from "react";
import { endpoint } from "../utils/constants";
import { login, logOut } from "../utils/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/helpers";

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

  const userLogin = async (email: string, password: string) => {
    await login(email, password).then((res) => {
      if (!res.error) {
        setIsAuthenticated(true);
        setUser(res);
      }
    });
  };

  const userLogout = async () => {
    await logOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  const checkAuth = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUser();
      } else {
        await logOut();
        setIsAuthenticated(false);
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    login,
    userLogin,
    userLogout,
    loading,
    isAuthenticated,
    setIsAuthenticated,
  };
};
