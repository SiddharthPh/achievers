import React from 'react';

const OrgChart = ({ employee }) => {
  if (!employee) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No employee data available</p>
      </div>
    );
  }

  // Check if orgChart exists and has hierarchy
  if (!employee.orgChart || !employee.orgChart.hierarchy) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Chart</h3>
          <p className="text-sm text-gray-600 mb-6">
            Organizational chart data is not available
          </p>
        </div>
      </div>
    );
  }

  const { hierarchy } = employee.orgChart;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Chart</h3>
        <p className="text-sm text-gray-600 mb-6">
          View your position within the organizational structure
        </p>
      </div>

      <div className="space-y-4">
        {hierarchy.map((person, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
              person.current 
                ? 'bg-blue-50 border-2 border-blue-200' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            style={{ marginLeft: `${person.level * 2}rem` }}
          >
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                person.current ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}>
                <span className="text-sm font-medium">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <h4 className={`font-medium ${person.current ? 'text-blue-600' : 'text-gray-900'}`}>
                {person.name}
                {person.current && <span className="ml-2 text-sm font-normal text-blue-500">(You)</span>}
              </h4>
              <p className="text-sm text-gray-600">{person.title}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">Level {person.level + 1}</span>
                {person.level > 0 && (
                  <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded">
                    Reports to Level {person.level}
                  </span>
                )}
              </div>
            </div>

            {/* Hierarchy indicator */}
            <div className="flex-shrink-0">
              {person.level > 0 && (
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Team Summary */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Team Information</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Team:</span>
            <span className="ml-2 text-gray-900">{employee.orgInfo?.team || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-500">Cost Center:</span>
            <span className="ml-2 text-gray-900">{employee.orgInfo?.costCenter || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-500">Work Location:</span>
            <span className="ml-2 text-gray-900">{employee.orgInfo?.workLocation || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-500">Direct Reports:</span>
            <span className="ml-2 text-gray-900">
              {employee.orgInfo?.directReports?.length || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Chart Legend */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Chart Legend</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-800">Your Position</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-gray-600">Manager/Colleague</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-200 rounded-full"></div>
            <span className="text-green-700">Team Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
