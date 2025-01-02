import {
  Church,
  CurrencyIcon,
  InfoIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  Users2Icon,
} from "lucide-react";
import Dashboard from "../../components/tabs/Dashboard";
import Settings from "../../components/tabs/Settings";
import Contributions from "../../components/tabs/Contributions";
import Info from "../../components/tabs/Info";
import Staff from "../../components/tabs/Staff";
import Tabs from "../../components/tabs/Tabs";

export default function ParishesPage() {
  const tabsData = [
    {
      name: "dashboard",
      label: <Dashboard data={{ title: "dashboard" }} />,
      icon: LayoutDashboardIcon,
    },
    { name: "profile", label: <Info />, icon: InfoIcon },
    {
      name: "contributions",
      label: <Contributions />,
      icon: CurrencyIcon,
    },
    { name: "settings", label: <Settings />, icon: SettingsIcon  },
    { name: "staff", label: <Staff />, icon: Users2Icon },
  ];

  return (
    <div className="ml-64 pl-6">
      <h1 className="text-2xl font-bold flex">
        <span>
          <Church />{" "}
        </span>
        &nbsp; Parish Name
      </h1>
      <Tabs tabsData={tabsData} />
    </div>
  );
}
