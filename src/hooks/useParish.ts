import { useState, useEffect } from "react";

import { Parish } from "../types/diocese";

import {
  getParishes,
  getParish,
  createParish,
  updateParish,
  deleteParish,
} from "../utils/api/parish.api";

export const useParish = () => {
  const [parishes, setParishes] = useState<Parish[]>([]);
  const [parish, setParish] = useState<Parish | null>(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(true);
  const [updating, setUpdating] = useState(true);
  const [deleting, setDeleting] = useState(true);

  const fetchParishes = async () => {
    try {
      const parishes = await getParishes();
      console.log("Parishes:", parishes);
      if (parishes.message) {
        setParishes([]);
      } else {
        setParishes(parishes);
      }
    } catch (error) {
      console.error("Error fetching parishes:", error);
    } finally {
      setLoading(false);
    }
  };

  const getParishById = async (id: string) => {
    try {
      const parish = await getParish(id);
      if (parish.message) {
        setParish(null);
      } else {
        setParish(parish);
      }
    } catch (error) {
      console.error("Error fetching parish:", error);
    } finally {
      setLoading(false);
    }
  };

  const createParishHook = async (data: any) => {
    try {
      const parish = await createParish(data);
      setParish(parish);
    } catch (error) {
      console.error("Error creating parish:", error);
    } finally {
      setCreating(false);
    }
  };

  const editParish = async (id: string, data: any) => {
    try {
      const parish = await updateParish(id, data);
      if (parish.message) {
        setParish(null);
      } else {
        setParish(parish);
      }
    } catch (error) {
      console.error("Error updating parish:", error);
    } finally {
      setUpdating(false);
    }
  };

  const deleteParishHook = async (id: string) => {
    try {
      const parish = await deleteParish(id);
      if (parish.message) {
        setParish(null);
      } else {
        setParish(parish);
      }
    } catch (error) {
      console.error("Error deleting parish:", error);
    } finally {
      setDeleting(false);
    }
  };


  useEffect(() => {
    fetchParishes();
  }, []);

  return {
    parishes,
    parish,
    loading,
    updating,
    creating,
    deleting,
    editParish,
    getParishById,
    createParishHook,
    deleteParishHook,
    refresh: fetchParishes,
  };
};
