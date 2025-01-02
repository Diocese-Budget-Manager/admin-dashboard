import React from "react";
export default function TabContent({
  children,
  showTab,
  tabName,
}: {
  children: React.ReactNode;
  showTab: (tabName: string) => string;
  tabName: string;
}) {
  return (
    <div
      className={`${showTab(
        tabName,
      )} p-4 rounded-lg bg-gray-50 dark:bg-gray-800 `}
      id="tabName"
    >
      {children}
    </div>
  );
}
