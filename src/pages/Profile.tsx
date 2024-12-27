import React from 'react';
import { User, Mail, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Header } from '../components/layout/Header';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                <p className="text-gray-500">Manage your account settings and preferences</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-gray-900">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Account Type</p>
                  <p className="text-gray-900">Standard User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}