import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Car, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const adminFeatures = [
    {
      title: 'Manage Users',
      icon: Users,
      path: '/admin/users',
      description: 'View and manage user accounts'
    },
    {
      title: 'Vehicle Database',
      icon: Car,
      path: '/admin/vehicles',
      description: 'Manage vehicle records'
    },
    {
      title: 'System Settings',
      icon: Settings,
      path: '/admin/settings',
      description: 'Configure system parameters'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adminFeatures.map((feature) => (
            <button
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {feature.description}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}