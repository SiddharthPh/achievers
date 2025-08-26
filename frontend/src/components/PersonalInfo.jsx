import React from 'react';

const PersonalInfo = ({ employee }) => {
  if (!employee || !employee.personalInfo) return null;

  const { personalInfo } = employee;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Birthday</label>
            <p className="mt-1 text-sm text-gray-900">{personalInfo.birthday}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Location</label>
            <p className="mt-1 text-sm text-gray-900">{personalInfo.workLocation}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Time Zone</label>
            <p className="mt-1 text-sm text-gray-900">{personalInfo.timeZone}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <p className="mt-1 text-sm text-gray-900">{employee.employeeId}</p>
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
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <p className="mt-1 text-sm text-gray-900">{employee.department}</p>
          </div>
        </div>
      </div>

      {personalInfo.bio && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.bio}</p>
          </div>
        </div>
      )}

      {personalInfo.skills && personalInfo.skills.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Skills & Expertise</label>
          <div className="flex flex-wrap gap-2">
            {personalInfo.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-workday-lightblue text-workday-blue text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {personalInfo.certifications && personalInfo.certifications.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Certifications</label>
          <div className="space-y-2">
            {personalInfo.certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 text-sm">🏆</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{cert}</p>
                  <p className="text-xs text-gray-500">Verified Certification</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Emergency Contacts</h4>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <span className="font-medium">Note:</span> Emergency contact information is managed by HR and can only be updated through the HR system.
          </p>
          <button className="mt-2 text-sm text-yellow-700 underline hover:text-yellow-900">
            Contact HR to update emergency contacts
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-900">Privacy Settings</h4>
          <button className="text-sm text-workday-blue hover:text-blue-700 underline">
            Manage Privacy
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Control what information is visible to your colleagues and managers.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
