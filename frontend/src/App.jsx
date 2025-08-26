import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import TabNavigation from './components/TabNavigation';
import QuickView from './components/QuickView';
import OrgChart from './components/OrgChart';
import PersonalInfo from './components/PersonalInfo';

const API_BASE_URL = 'http://localhost:5001/api';

function App() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('quick-view');

  useEffect(() => {
    fetchEmployeeProfile();
  }, []);

  const fetchEmployeeProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/employee-profile`);
      if (!response.ok) {
        throw new Error('Failed to fetch employee profile');
      }
      const data = await response.json();
      setEmployee(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-workday-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h2 className="text-red-800 font-semibold mb-2">Error Loading Profile</h2>
            <p className="text-red-600">{error}</p>
            <button 
              onClick={fetchEmployeeProfile}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard employee={employee} />
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
