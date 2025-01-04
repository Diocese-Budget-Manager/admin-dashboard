import { useState } from "react";
import {
  getContribution,
  createContribution,
  deleteContribution,
  updateContribution,
  getContributions,
  getContributionByParish,
} from "../utils/api/contibution.api";

export const useContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [contribution, setContribution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(true);
  const [updating, setUpdating] = useState(true);
  const [deleting, setDeleting] = useState(true);

  const fetchContributions = async () => {
    try {
      const contributions = await getContributions();
      console.log("Contributions:", contributions);
      if (contributions.message) {
        setContributions([]);
      } else {
        setContributions(contributions);
      }
    } catch (error) {
      console.error("Error fetching contributions:", error);
    } finally {
      setLoading(false);
    }
  };

  const getContributionById = async (id: string) => {
    try {
      const contribution = await getContribution(id);
      if (contribution.message) {
        setContribution(null);
      } else {
        setContribution(contribution);
      }
    } catch (error) {
      console.error("Error fetching contribution:", error);
    } finally {
      setLoading(false);
    }
  };

  const createContributionHook = async (data: any) => {
    try {
      const contribution = await createContribution(data);
      setContribution(contribution);
    } catch (error) {
      console.error("Error creating contribution:", error);
    } finally {
      setCreating(false);
    }
  };

  const updateContributionHook = async (id: string, data: any) => {
    try {
      const contribution = await updateContribution(id, data);
      setContribution(contribution);
    } catch (error) {
      console.error("Error updating contribution:", error);
    } finally {
      setUpdating(false);
    }
  };

  const deleteContributionHook = async (id: string) => {
    try {
      const contribution = await deleteContribution(id);
      setContribution(contribution);
    } catch (error) {
      console.error("Error deleting contribution:", error);
    } finally {
      setDeleting(false);
    }
  };

  const getContributionByParishHook = async (parishId: string) => {
    try {
      const contributions = await getContributionByParish(parishId);
      // console.log("Contributions:", contributions);
      if (contributions.message) {
        setContributions([]);
        return [];
      } else {
        setContributions(contributions);
        return contributions;
      }
    } catch (error) {
      console.error("Error fetching contributions:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchContributions,
    getContributionById,
    createContributionHook,
    updateContributionHook,
    deleteContributionHook,
    getContributionByParishHook,
    contributions,
    contribution,
    loading,
    creating,
    updating,
    deleting,
  };
};
