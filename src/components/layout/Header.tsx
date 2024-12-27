import React from 'react';
import { ProfileMenu } from '../ProfileMenu';

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Updated logo with increased width */}
          <img
            src="/images/logo.png" // Replace this with the actual path to your logo
            alt="Easy Way Logo"
            className="w-16 h-16 mr-2" // Adjusted size for a larger logo
          />
          <h1 className="text-2xl font-bold text-gray-900">Easy way</h1>
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};
