import React, { useState } from 'react';
import { Settings, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { supabase } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
        aria-label="Profile settings"
      >
        <Settings
          className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/profile');
            }}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/dashboard');
            }}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-2" />
            Dashboard
          </button>
          
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};