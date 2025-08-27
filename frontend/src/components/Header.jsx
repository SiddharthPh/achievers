import React from 'react';

const Header = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'rewards', label: 'Rewards', icon: '🎁' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'directory', label: 'Directory', icon: '📋' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-workday-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HR</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Employee Portal</h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeView === item.id
                    ? 'text-workday-blue bg-blue-50 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className="ml-4 w-8 h-8 bg-gray-300 rounded-full"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
