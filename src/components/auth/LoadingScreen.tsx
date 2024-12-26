import React from 'react';

export const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Initializing...</h2>
      <p className="text-gray-600">Please wait while we set up your session</p>
    </div>
  </div>
);