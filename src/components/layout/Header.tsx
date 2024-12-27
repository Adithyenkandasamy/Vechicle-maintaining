import React from 'react';
import { Car } from 'lucide-react';
import { ProfileMenu } from '../ProfileMenu';

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Car className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Easy way</h1>
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};