import React from "react";
import { Activity } from "../../types/activity";
import {
  UserPlus,
  Settings,
  Church,
  DollarSign,
  LogIn,
  FileEdit,
} from "lucide-react";

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case "user_login":
        return <LogIn className="h-5 w-5 text-blue-500" />;
      case "user_created":
        return <UserPlus className="h-5 w-5 text-green-500" />;
      case "settings_updated":
        return <Settings className="h-5 w-5 text-purple-500" />;
      case "parish_updated":
        return <Church className="h-5 w-5 text-indigo-500" />;
      case "contribution_added":
      case "contribution_updated":
        return <DollarSign className="h-5 w-5 text-yellow-500" />;
      default:
        return <FileEdit className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="relative flex items-start space-x-3">
      <div className="relative px-1">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
          {getIcon()}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">
            {activity.description}
          </span>
          <span className="whitespace-nowrap text-gray-400 ml-2">
            {new Date(activity.createdAt).toLocaleString()}
          </span>
        </div>
        {activity.metadata && (
          <div className="mt-2 text-sm text-gray-700">
            <pre className="bg-gray-50 rounded p-2 text-xs">
              {JSON.stringify(activity.metadata, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
