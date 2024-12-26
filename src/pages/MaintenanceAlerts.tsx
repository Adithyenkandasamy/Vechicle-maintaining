import React from 'react';
import { ArrowLeft, Wrench, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MaintenanceAlerts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-600">
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
        <h1 className="text-2xl font-bold text-white mb-8">Maintenance Alerts</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Vehicle Status</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Overall Health</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Good
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
              <div>
                <h3 className="font-bold text-red-800">Oil Change Required</h3>
                <p className="text-sm text-red-600">Due in 500 miles</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <Wrench className="w-6 h-6 text-yellow-500 mr-2" />
              <div>
                <h3 className="font-bold text-yellow-800">Tire Rotation</h3>
                <p className="text-sm text-yellow-600">Recommended within 2 weeks</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <div>
                <h3 className="font-bold text-green-800">Brake System</h3>
                <p className="text-sm text-green-600">Good condition</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Maintenance History</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="font-medium">Oil Change</div>
              <div className="text-sm text-gray-600">Completed 3 months ago</div>
            </div>
            <div className="border-b pb-4">
              <div className="font-medium">Tire Rotation</div>
              <div className="text-sm text-gray-600">Completed 2 months ago</div>
            </div>
            <div>
              <div className="font-medium">Brake Inspection</div>
              <div className="text-sm text-gray-600">Completed 1 month ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}