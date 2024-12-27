import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Fuel, Leaf, DollarSign, Radar } from 'lucide-react';

export default function FuelSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-600">
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
        <h1 className="text-2xl font-bold text-white mb-8">Fuel Selection</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Recommended Fuel</h2>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-800">Premium 95</span>
              <Leaf className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-sm text-green-600">Best for your vehicle's performance</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <Fuel className="w-6 h-6 text-blue-500 mb-2" />
            <div className="text-sm text-gray-600">Tank Level</div>
            <div className="font-bold">65%</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <DollarSign className="w-6 h-6 text-green-500 mb-2" />
            <div className="text-sm text-gray-600">Avg. Price</div>
            <div className="font-bold">$3.45/gal</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Fuel Options</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Regular 87</span>
                <span className="text-green-500">$3.25/gal</span>
              </div>
              <p className="text-sm text-gray-600">Basic performance</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Premium 95</span>
                <span className="text-green-500">$3.45/gal</span>
              </div>
              <p className="text-sm text-gray-600">Enhanced performance</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">Super 98</span>
                <span className="text-green-500">$3.75/gal</span>
              </div>
              <p className="text-sm text-gray-600">Maximum performance</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/radar')}
          className="w-full bg-white text-pink-600 py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Radar className="w-6 h-6 mr-2" />
          Go to Radar
        </button>
      </div>
    </div>
  );
}