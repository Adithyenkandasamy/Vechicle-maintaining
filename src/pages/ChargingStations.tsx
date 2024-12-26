import React from 'react';
import { ArrowLeft, MapPin, Battery, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChargingStations() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cyan-600">
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
        <h1 className="text-2xl font-bold text-white mb-8">Charging Stations</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Nearby Stations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <div className="font-bold">Central Station</div>
                  <div className="text-sm text-gray-600">0.5 miles away</div>
                </div>
              </div>
              <div className="text-green-500">Available</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-yellow-500 mr-2" />
                <div>
                  <div className="font-bold">West Side Plaza</div>
                  <div className="text-sm text-gray-600">1.2 miles away</div>
                </div>
              </div>
              <div className="text-yellow-500">Busy</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center">
            <Battery className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-sm text-gray-600">Power Level</div>
            <div className="font-bold">Level 3</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-sm text-gray-600">Avg. Wait</div>
            <div className="font-bold">5 min</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Station Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Charging Speed</span>
              <span className="font-bold">150 kW</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Price per kWh</span>
              <span className="font-bold">$0.35</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Connector Type</span>
              <span className="font-bold">CCS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}