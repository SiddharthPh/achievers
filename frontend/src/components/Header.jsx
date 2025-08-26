import React from 'react';

const Header = () => {
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
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Directory
            </a>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
