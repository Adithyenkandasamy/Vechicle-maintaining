import React from 'react';
import { ArrowLeft, Battery, Leaf, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SolarCharging() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-indigo-600">
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
        <h1 className="text-2xl font-bold text-white mb-8">Solar Charging Details</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="mb-6">
            <p className="text-gray-600">Current Power</p>
            <p className="text-4xl font-bold">4.2 kW</p>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600">Today's Generation</p>
            <div className="flex items-center">
              <p className="text-4xl font-bold">32.5 kWh</p>
              <span className="ml-2 text-green-500">+15% vs yesterday</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Charging Status</h2>
          <div className="mb-4">
            <p className="text-gray-600">Battery Level</p>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <span className="ml-4 font-bold">75%</span>
            </div>
          </div>
          <p className="text-gray-600">Time to Full Charge: 1h 45m</p>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Battery className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="font-bold">92%</p>
              <p className="text-sm text-gray-600">Efficiency</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Leaf className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="font-bold">45kg</p>
              <p className="text-sm text-gray-600">CO₂ Saved</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="font-bold">$12.50</p>
              <p className="text-sm text-gray-600">Cost Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}