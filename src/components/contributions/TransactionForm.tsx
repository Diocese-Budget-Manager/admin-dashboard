import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Transaction } from "../../types/contributions";
import { useParams } from "react-router-dom";

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, "_id">) => Promise<void>;
  dioceseId?: string;
}


const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, dioceseId }) => {
  const { parishId } = useParams();

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    type: "income",
    source: "",
    description: "",
    parish: parishId ?? "",
    diocese: dioceseId ?? "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount),
    });
    setFormData({
      date: new Date().toISOString().split("T")[0],
      type: "income",
      source: "",
      description: "",
      amount: "",
      parish: formData.parish,
      diocese: formData.diocese,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Add New Transaction</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value as "income" | "expense",
              })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category / Source
          </label>
          <input
            type="text"
            value={formData.source}
            onChange={(e) =>
              setFormData({ ...formData, source: e.target.value })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder="e.g., Donations, Utilities"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder="Transaction description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            step="0.01"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <PlusCircle className="h-4 w-4" />
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
