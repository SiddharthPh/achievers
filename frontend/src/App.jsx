import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Rewards from './components/Rewards';
import Team from './components/Team';
import Directory from './components/Directory';
import { mockEmployeeData } from './data/mockData';

function App() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('quick-view');

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setEmployee(mockEmployeeData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <Dashboard 
            employee={employee} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        );
      case 'rewards':
        return <Rewards />;
      case 'team':
        return <Team />;
      case 'directory':
        return <Directory />;
      default:
        return (
          <Dashboard 
            employee={employee} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        );
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
      <Header activeView={activeView} onViewChange={setActiveView} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderMainContent()}
      </main>
    </div>
  );
}

export default App;
