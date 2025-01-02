import { useState } from "react";
import TabContent from "../TabContent";

export default function Tabs({ tabsData }: { tabsData: any[] }) {
  const [currentTab, setCurrentTab] = useState<string>(
    tabsData && tabsData.length ? tabsData[0].name : "",
  );

  const toggleTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const showTab = (tab: string) => {
    return currentTab === tab ? "block" : "hidden";
  };
  return (
    <div className="mt-8">
      {/* Headers orientation horizontal */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabsData &&
            tabsData.map((t: any) => (
              <li key={t.name} role="presentation" className="me-2">
                <button
                  className={`flex p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    currentTab === `${t.name}`
                      ? "bg-gray-50 dark:bg-gray-800 text-white font-semibold"
                      : ""
                  }`}
                  id={`${t.name}-tab`}
                  type="button"
                  onClick={() => toggleTab(`${t.name}`)}
                >
                  <t.icon /> &nbsp; <span className="capitalize">{t.name}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* Tab content */}
      {tabsData &&
        tabsData.map((t: any) => (
          <TabContent key={t.name} showTab={showTab} tabName={t.name}>
            {t.label}
          </TabContent>
        ))}
    </div>
  );
}
