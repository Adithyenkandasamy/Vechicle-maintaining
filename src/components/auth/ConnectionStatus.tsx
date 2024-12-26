import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ConnectionStatusProps {
  message: string;
}

export const ConnectionStatus = ({ message }: ConnectionStatusProps) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <div className="flex items-center justify-center mb-4">
        <AlertCircle className="w-12 h-12 text-amber-500" />
      </div>
      <h2 className="text-xl font-semibold text-center mb-4">Connection Required</h2>
      <p className="text-gray-600 text-center mb-6">{message}</p>
      <div className="text-center text-sm text-gray-500">
        Please click the "Connect to Supabase" button in the top right to continue
      </div>
    </div>
  </div>
);