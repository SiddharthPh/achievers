import React from 'react';

const ProfileCard = ({ employee }) => {
  if (!employee) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src={employee.profilePicture}
            alt={employee.name}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        
        <h2 className="mt-4 text-xl font-semibold text-gray-900">{employee.name}</h2>
        <p className="text-gray-600 font-medium">{employee.title}</p>
        <p className="text-sm text-gray-500">{employee.department}</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Manager</p>
            <p className="text-sm text-gray-600">{employee.manager.name}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Team</p>
            <p className="text-sm text-gray-600">{employee.team}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Location</p>
            <p className="text-sm text-gray-600">{employee.office}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Employee ID</p>
            <p className="text-sm text-gray-600">{employee.employeeId}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex space-x-3">
          <button className="flex-1 bg-workday-blue text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Message
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
