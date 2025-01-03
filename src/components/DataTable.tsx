// Desc: This file contains the DataTable component which is used to display the data in a tabular form.
import { Link } from "react-router-dom";

export default function DataTable({ data }: { data: any[] }) {
  return (
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            No of Parish
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Budget Allocation
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((diocese) => (
          <tr key={diocese.id} className="hover:bg-gray-50">
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">
{diocese.id}
              </div>
              
            </td>
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">
<Link
                to={
                  diocese.parish
                    ? `/dioceses/${diocese._id}`
                    : `/parish/${diocese._id}`
                }
              >
                {diocese.name}
              </Link>
              </div>
              
            </td>
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">
{diocese.address}
              </div>
              
            </td>
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">
{diocese?.parish?.length ?? 0}
              </div>
              
            </td>
            <td className="px-6 py-4">
              <div className="text-sm font-medium text-gray-900">

              </div>
              {diocese.budgetAllocation}
            </td>
            <td className="text-sm font-medium text-gray-900">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
