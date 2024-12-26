import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SolarCharging from './pages/SolarCharging';
import TrafficData from './pages/TrafficData';
import MaintenanceAlerts from './pages/MaintenanceAlerts';
import SmartGrid from './pages/SmartGrid';
import ChargingStations from './pages/ChargingStations';
import FuelSelection from './pages/FuelSelection';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solar-charging" element={<SolarCharging />} />
          <Route path="/traffic-data" element={<TrafficData />} />
          <Route path="/maintenance-alerts" element={<MaintenanceAlerts />} />
          <Route path="/smart-grid" element={<SmartGrid />} />
          <Route path="/charging-stations" element={<ChargingStations />} />
          <Route path="/fuel-selection" element={<FuelSelection />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;