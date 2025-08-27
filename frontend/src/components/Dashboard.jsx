import React from 'react';
import ProfileCard from './ProfileCard';
import TabNavigation from './TabNavigation';
import QuickView from './QuickView';
import OrgChart from './OrgChart';
import PersonalInfo from './PersonalInfo';

const Dashboard = ({ employee, activeTab, onTabChange }) => {
  const renderTabContent = () => {
    if (!employee) return null;

    switch (activeTab) {
      case 'quick-view':
        return <QuickView employee={employee} />;
      case 'org-chart':
        return <OrgChart employee={employee} />;
      case 'personal-info':
        return <PersonalInfo employee={employee} />;
      default:
        return <QuickView employee={employee} />;
    }
  };

  if (!employee) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-workday-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Profile Card */}
      <div className="lg:col-span-1">
        <ProfileCard employee={employee} />
      </div>

      {/* Right Column - Main Content */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
