import React from 'react';

const QuickView = ({ employee }) => {
  if (!employee) return null;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{employee.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{employee.phone}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Office Location</label>
              <p className="mt-1 text-sm text-gray-900">{employee.office}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <p className="mt-1 text-sm text-gray-900">
                {new Date(employee.startDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Reporting Structure</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">{employee.manager.name}</p>
              <p className="text-sm text-gray-600">{employee.manager.title}</p>
              <p className="text-xs text-gray-500">{employee.manager.email}</p>
            </div>
          </div>
          
          {employee.directReports && employee.directReports.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Direct Reports ({employee.directReports.length})</h4>
              <div className="space-y-2">
                {employee.directReports.map((report, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{report.name}</p>
                      <p className="text-xs text-gray-600">{report.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-workday-lightblue rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm font-medium text-gray-700">Send Email</p>
          </button>
          <button className="p-4 bg-workday-lightblue rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">📅</div>
            <p className="text-sm font-medium text-gray-700">Schedule Meeting</p>
          </button>
          <button className="p-4 bg-workday-lightblue rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">📄</div>
            <p className="text-sm font-medium text-gray-700">View Documents</p>
          </button>
          <button className="p-4 bg-workday-lightblue rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">⚙️</div>
            <p className="text-sm font-medium text-gray-700">Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
