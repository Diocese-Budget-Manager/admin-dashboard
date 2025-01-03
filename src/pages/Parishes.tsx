import React, { useState } from "react";
import { Search, Filter, Download } from "lucide-react";

const Parishes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - replace with actual data from Supabase
  const parishes = [
    {
      id: "1",
      name: "St. Mary's Cathedral",
      diocese: "Diocese of Makeni",
      address: "123 Main St, Makeni, IL",
      bishop: "Rev. John Doe",
      phone: "(555) 123-4567",
      email: "info@stmaryscathedral.org",
      monthlyContribution: 15000,
      lastContribution: "2024-03-01",
      status: "active",
    },
    {
      id: "2",
      name: "St. Joseph's Church",
      diocese: "Diocese of Makeni",
      address: "456 Church Ave, Makeni, IL",
      bishop: "Rev. Jane Smith",
      phone: "(555) 987-6543",
      email: "contact@stjosephchurch.org",
      monthlyContribution: 12000,
      lastContribution: "2024-03-05",
      status: "active",
    },
    // Add more mock data as needed
  ];

  const filteredParishes = parishes.filter(
    (parish) =>
      parish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parish.diocese.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parish.bishop.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Parishes</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search parishes..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parish
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diocese
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  bishop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Contribution
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredParishes.map((parish) => (
                <tr key={parish.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {parish.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {parish.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {parish.diocese}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {parish.bishop}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{parish.phone}</div>
                    <div className="text-sm text-gray-500">{parish.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    ${parish.monthlyContribution.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        parish.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {parish.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Parishes;
