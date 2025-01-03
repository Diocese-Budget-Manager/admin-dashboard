import React from "react";
import { Mail, Phone, MapPin, User, Church } from "lucide-react";
import { Parish } from "../../types/diocese";

interface ParishInfoProps {
  parish: Parish;
}

const ParishInfo: React.FC<ParishInfoProps> = ({ parish }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Church className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">Parish Name</p>
              <p className="mt-1">{parish.name}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">bishop</p>
              <p className="mt-1">{parish.description}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">Address</p>
              <p className="mt-1">{parish.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="mt-1">{parish.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-1">{parish.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParishInfo;
