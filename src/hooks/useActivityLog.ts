import { useState, useEffect } from "react";
import { Activity,  } from "../types/activity";
// import { supabase } from "../lib/supabaseClient";
import { getActivityLogs } from "../utils/api/activity-logs.api";

export const useActivityLog = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const activity = await getActivityLogs();
      setActivities(activity);
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setLoading(false);
    }
  };

//   const logActivity = async (
//     type: ActivityType,
//     description: string,
//     metadata?: Record<string, any>,
//   ) => {
//     try {
//       const { data, error } = await supabase.from("activities").insert([
//         {
//           type,
//           description,
//           metadata,
//           user_id: supabase.auth.user()?.id,
//         },
//       ]);

//       if (error) throw error;
//       await fetchActivities();
//     } catch (error) {
//       console.error("Error logging activity:", error);
//     }
//   };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    loading,
    // logActivity,
    refreshActivities: fetchActivities,
  };
};

export default useActivityLog;
