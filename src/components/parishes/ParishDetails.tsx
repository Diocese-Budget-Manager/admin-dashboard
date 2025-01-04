import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import ParishTabs from "./ParishTabs";
import ParishInfo from "./ParishInfo";
import ParishSettings from "./ParishSettings";
import Breadcrumb from "../common/Breadcrumb";
import { Parish } from "../../types/diocese";
import ParishContributions from "./ParishContributions";
// import { sampleParish } from "../../utils/data";
import { useParish } from "../../hooks/useParish";
import { Building2, Phone } from "lucide-react";
const ParishDetail = () => {
  const { parishId } = useParams();
  const [activeTab, setActiveTab] = useState("info");

  const { getParishById, parishes, refresh, editParish } = useParish();

  useEffect(() => {
    getParishById(parishId!);
    refresh();
  }, [parishId]);

  // Mock data - replace with actual data from Supabase
  const parish: Parish = parishes.find(({ _id }) => _id === parishId)!;

  const breadcrumbItems = [
    { label: "Parishes", path: "/parish" },
    { label: parish?.name ?? "" },
  ];

  const handleSaveSettings = async (updatedParish: Parish) => {
    // TODO: Implement save functionality with Supabase
    await editParish(parishId ?? "", updatedParish)
      .then(() => console.log("Parish updated successfully"))
      .finally(() => refresh());
    console.log("Saving parish settings:", updatedParish);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "info":
        return <ParishInfo parish={parish} />;
      case "contributions":
        return <ParishContributions parish={parish} />;
      case "settings":
        return <ParishSettings parish={parish} onSave={handleSaveSettings} />;
      default:
        return null;
    }
  };

  if (!parish) return <div>Loading...</div>;

  return (
    <div className="p-6 ml-64">
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex items-center gap-4 py-2">
          <img
            src={parish?.image}
            alt="Parish"
            className="w-24 h-24 rounded-full"
          />
          <h1 className="text-2xl font-bold mt-4 mb-2">{parish?.name}</h1>
        </div>

        <p className="text-gray-500 flex text-sm">
          <Building2 className="w-5 h-5" />
          &nbsp;&nbsp; <span>{parish?.address} </span>
        </p>
        <p className="text-gray-500 flex">
          <Phone className="w-5 h-5" />
          &nbsp;&nbsp; <span>{parish?.phone}</span>
        </p>
      </div>

      <ParishTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <Suspense fallback={<div>Loading ...</div>} />
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default ParishDetail;
