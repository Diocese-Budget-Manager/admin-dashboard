import React from 'react';
import { ChurchIcon, TrendingUp, Users } from 'lucide-react';
import { Dioceses } from '../types/diocese';

interface DioceseCardProps {
  diocese: Dioceses;
}

const DioceseCard: React.FC<DioceseCardProps> = ({ diocese }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <ChurchIcon className="h-10 w-10 text-blue-600" />
          <div>
            <h3 className="text-xl font-semibold">{diocese.name}</h3>
            <p className="text-gray-500">{diocese.address}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Parishes</p>
            <p className="font-semibold">{diocese.parish.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Monthly Contribution</p>
            <p className="font-semibold">${diocese.budgetAllocation.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Last Updated</span>
          <span className="text-gray-700">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default DioceseCard;