// import React from 'react'

import { CoinsIcon, Info } from "lucide-react";
import Tabs from "../../components/tabs/Tabs";

export default function DiocesePage() {
  const tabsData = [
    {name: 'info', label: 'Info', icon: Info},
    {name: 'Budgeting', label: 'Budgeting', icon: CoinsIcon},
  ];
  return (
    <div className='ml-64'><h3>DiocesePage</h3>
    <Tabs tabsData={tabsData} />
    </div>
  )
}
