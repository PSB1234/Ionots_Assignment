import React from 'react';
import { Briefcase } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Project Assignment System</h1>
        </div>
      </div>
    </header>
  );
};