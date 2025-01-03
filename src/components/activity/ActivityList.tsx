import React from "react";
import { Activity } from "../../types/activity";
import ActivityItem from "./ActivityItem";

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activities.map((activity, index) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {index !== activities.length - 1 && (
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <ActivityItem activity={activity} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
