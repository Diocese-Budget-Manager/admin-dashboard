import React from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { MonthlyBalance } from "../../types/contributions";

interface MonthlyOverviewProps {
  balance: MonthlyBalance;
}

const MonthlyOverview: React.FC<MonthlyOverviewProps> = ({ balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Income</p>
            <p className="text-2xl font-bold text-green-600">
              ${balance.income.toLocaleString()}
            </p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-600" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Expenses</p>
            <p className="text-2xl font-bold text-red-600">
              ${balance.expenses.toLocaleString()}
            </p>
          </div>
          <TrendingDown className="h-8 w-8 text-red-600" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Balance</p>
            <p
              className={`text-2xl font-bold ${
                balance.balance >= 0 ? "text-blue-600" : "text-red-600"
              }`}
            >
              ${balance.balance.toLocaleString()}
            </p>
          </div>
          <DollarSign className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyOverview;
