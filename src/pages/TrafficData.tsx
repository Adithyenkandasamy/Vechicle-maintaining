import React from 'react';
import { ArrowLeft, Car, Clock, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TrafficData() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-500">
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
        <h1 className="text-2xl font-bold text-white mb-8">Traffic Data</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Current Traffic Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Traffic Density</span>
              <span className="font-bold text-green-500">Low</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Average Speed</span>
              <span className="font-bold">45 mph</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center">
            <Car className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-sm text-gray-600">Vehicles</div>
            <div className="font-bold">127</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-sm text-gray-600">Avg. Wait</div>
            <div className="font-bold">2m</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-red-500" />
            <div className="text-sm text-gray-600">Incidents</div>
            <div className="font-bold">0</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Route Suggestions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-bold text-green-700">Recommended Route</div>
              <div className="text-sm text-gray-600">Via Highway 101</div>
              <div className="text-sm text-green-600">15 mins faster</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-gray-700">Alternative Route</div>
              <div className="text-sm text-gray-600">Via Main Street</div>
              <div className="text-sm text-gray-600">+10 mins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}