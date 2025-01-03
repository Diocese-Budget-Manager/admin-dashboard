import { useState, useEffect } from "react";

import { Parish } from "../types/diocese";

import { getParishes, getParish } from "../utils/api/parish.api";

export const useParish = () => {
  const [parishes, setParishes] = useState<Parish[]>([]);
  const [parish, setParish] = useState<Parish | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchParishes = async () => {
    try {
      const parishes = await getParishes();
      setParishes(parishes);
    } catch (error) {
      console.error("Error fetching parishes:", error);
    } finally {
      setLoading(false);
    }
  };

  const getParishById = async (id: string) => {
    try {
      const parish = await getParish(id);
      setParish(parish);
    } catch (error) {
      console.error("Error fetching parish:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParishes();
  }, []);

  return {
    parishes,
    parish,
    loading,
    getParishById,
    refresh: fetchParishes,
  };
};
