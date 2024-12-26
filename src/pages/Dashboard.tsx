import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Battery,
  TrafficCone,
  AlertTriangle,
  Power,
  Plug,
  Fuel
} from 'lucide-react';

const features = [
  {
    title: 'Solar Charging Details',
    icon: Battery,
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
    path: '/solar-charging'
  },
  {
    title: 'Traffic Datas',
    icon: TrafficCone,
    color: 'bg-orange-100',
    textColor: 'text-orange-600',
    path: '/traffic-data'
  },
  {
    title: 'Maintenance Alerts',
    icon: AlertTriangle,
    color: 'bg-green-100',
    textColor: 'text-green-600',
    path: '/maintenance-alerts'
  },
  {
    title: 'Smart Grid',
    icon: Power,
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
    path: '/smart-grid'
  },
  {
    title: 'Charging Stations',
    icon: Plug,
    color: 'bg-cyan-100',
    textColor: 'text-cyan-600',
    path: '/charging-stations'
  },
  {
    title: 'Fuel Selection',
    icon: Fuel,
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
    path: '/fuel-selection'
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Easy way</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <button
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className={`${feature.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <feature.icon className={`w-12 h-12 ${feature.textColor} mx-auto`} />
              <h3 className={`mt-4 text-center font-medium ${feature.textColor}`}>
                {feature.title}
              </h3>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}