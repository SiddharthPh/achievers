import React from 'react';

const OrgChart = ({ employee }) => {
  if (!employee || !employee.orgChart) return null;

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
                ? 'bg-workday-lightblue border-2 border-workday-blue' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            style={{ marginLeft: `${person.level * 2}rem` }}
          >
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                person.current ? 'bg-workday-blue text-white' : 'bg-gray-300'
              }`}>
                <span className="text-sm font-medium">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <h4 className={`font-medium ${person.current ? 'text-workday-blue' : 'text-gray-900'}`}>
                {person.name}
                {person.current && <span className="ml-2 text-sm font-normal">(You)</span>}
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

            <div className="flex-shrink-0">
              {person.current ? (
                <div className="w-3 h-3 bg-workday-blue rounded-full"></div>
              ) : (
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {employee.directReports && employee.directReports.length > 0 && (
        <div className="mt-8">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Your Direct Reports</h4>
          <div className="space-y-3">
            {employee.directReports.map((report, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg"
                style={{ marginLeft: `${(employee.orgChart.level + 1) * 2}rem` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-green-800">
                      {report.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h5 className="font-medium text-gray-900">{report.name}</h5>
                  <p className="text-sm text-gray-600">{report.title}</p>
                  <p className="text-xs text-green-600">Reports to you</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Chart Legend</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-workday-blue rounded-full"></div>
            <span className="text-blue-800">Your Position</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-gray-600">Manager/Colleague</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-200 rounded-full"></div>
            <span className="text-green-700">Direct Report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
