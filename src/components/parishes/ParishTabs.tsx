import React from "react";
import { Settings, Info, DollarSign } from "lucide-react";

interface ParishTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ParishTabs: React.FC<ParishTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "info", label: "Parish Info", icon: Info },
    { id: "contributions", label: "Contributions", icon: DollarSign },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`
              flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ParishTabs;
