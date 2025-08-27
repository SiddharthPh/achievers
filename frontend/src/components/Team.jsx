import React from 'react';

const Team = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Team Overview</h2>
        <p className="text-gray-600 mt-1">
          Manage your team and view team member profiles
        </p>
      </div>

      <div className="text-center py-12">
        <div className="text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Team Management</h3>
          <p className="mt-1 text-sm text-gray-500">Team management features coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
