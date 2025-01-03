import { useState } from "react";
import { useParams } from "react-router-dom";
import ParishTabs from "./ParishTabs";
import ParishInfo from "./ParishInfo";
import ParishSettings from "./ParishSettings";
import Breadcrumb from "../common/Breadcrumb";
import { Parish } from "../../types/diocese";
import ParishContributions from "./ParishContributions";
import { sampleParish } from "../../utils/data";
const ParishDetail = () => {
  const { parishId } = useParams();
  const [activeTab, setActiveTab] = useState("info");

  // Mock data - replace with actual data from Supabase
  const parish: Parish = sampleParish.find(({ id }) => id === parishId)!;

  const breadcrumbItems = [
    { label: "Parishes", path: "/parish" },
    { label: parish.name },
  ];

  const handleSaveSettings = (updatedParish: Parish) => {
    // TODO: Implement save functionality with Supabase
    console.log("Saving parish settings:", updatedParish);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "info":
        return <ParishInfo parish={parish} />;
      case "contributions":
        return <ParishContributions />;
      case "settings":
        return <ParishSettings parish={parish} onSave={handleSaveSettings} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 ml-64">
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold mt-4 mb-2">{parish.name}</h1>
        <p className="text-gray-500">{parish.diocese}</p>
      </div>

      <ParishTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default ParishDetail;
