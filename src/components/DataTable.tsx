// Desc: This file contains the DataTable component which is used to display the data in a tabular form.
import { Link } from "react-router-dom";

export default function DataTable({ data }: { data: any[] }) {
  return (
    <table className="table-fixed border border-collapse w-full">
      <thead>
        <tr>
          <th className="py-2 border border-slate-600">ID</th>
          <th className="py-2 border border-slate-600">Name</th>
          <th className="py-2 border border-slate-600">Address</th>
          <th className="py-2 border border-slate-600">No of Parish</th>
          <th className="py-2 border border-slate-600">Budget Allocation</th>
          <th className="py-2 border border-slate-600">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((diocese) => (
          <tr key={diocese.id}>
            <td className=" px-2 py-1  border border-slate-700">
              {diocese.id}
            </td>
            <td className=" px-2 py-1  border border-slate-700">
              <Link to={diocese.parish ? `/dioceses/${diocese._id}` : `/parish/${diocese._id}`}>{diocese.name}</Link>
            </td>
            <td className=" px-2 py-1  border border-slate-700">
              {diocese.address}
            </td>
            <td className=" px-2 py-1  border border-slate-700">
              {diocese?.parish?.length ?? 0}
            </td>
            <td className=" px-2 py-1  border border-slate-700">
              {diocese.budgetAllocation}
            </td>
            <td className="px-2 py-1 flex space-x-2">
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
