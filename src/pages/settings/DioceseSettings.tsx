import React from "react";
import { Save } from "lucide-react";
import DioceseGeneralSettings from "./diocese/DioceseGeneralSettings";
import DioceseUserManagement from "./diocese/DioceseUserManagement";

const DioceseSettings = () => {
  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-6">Diocese Settings</h1>

      <div className="space-y-6">
        <DioceseGeneralSettings />
        <DioceseUserManagement />
      </div>
    </div>
  );
};

export default DioceseSettings;
