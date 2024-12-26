import React from 'react';
import { ArrowLeft, Zap, Battery, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SmartGrid() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-600">
      <div className="p-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-white flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back
        </button>
      </div>
      
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Smart Grid</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Grid Status</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Current Load</p>
              <p className="text-2xl font-bold">7.2 kW</p>
            </div>
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <Battery className="w-6 h-6 text-blue-500 mb-2" />
            <div className="text-sm text-gray-600">Storage</div>
            <div className="font-bold">85%</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <Activity className="w-6 h-6 text-green-500 mb-2" />
            <div className="text-sm text-gray-600">Efficiency</div>
            <div className="font-bold">92%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Energy Distribution</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Home Usage</span>
              <span className="font-bold">3.5 kW</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Vehicle Charging</span>
              <span className="font-bold">2.8 kW</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Grid Export</span>
              <span className="font-bold">0.9 kW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}