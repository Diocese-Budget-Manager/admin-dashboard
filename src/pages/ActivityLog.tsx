import React from "react";
import { Filter } from "lucide-react";
import ActivityList from "../components/activity/ActivityList";
import useActivityLog from "../hooks/useActivityLog";

const ActivityLog = () => {
  const { activities, loading } = useActivityLog();

  return (
    <div className="p-6 ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Activity Log</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {loading ? (
          <div className="text-center py-4">Loading activities...</div>
        ) : (
          <ActivityList activities={activities} />
        )}
      </div>
    </div>
  );
};

export default ActivityLog;
