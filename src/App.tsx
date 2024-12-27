import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SolarCharging from './pages/SolarCharging';
import TrafficData from './pages/TrafficData';
import MaintenanceAlerts from './pages/MaintenanceAlerts';
import SmartGrid from './pages/SmartGrid';
import ChargingStations from './pages/ChargingStations';
import FuelSelection from './pages/FuelSelection';
import AdminDashboard from './pages/admin/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { AdminLayout } from './components/admin/AdminLayout';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/solar-charging" element={<SolarCharging />} />
          <Route path="/traffic-data" element={<TrafficData />} />
          <Route path="/maintenance-alerts" element={<MaintenanceAlerts />} />
          <Route path="/smart-grid" element={<SmartGrid />} />
          <Route path="/charging-stations" element={<ChargingStations />} />
          <Route path="/fuel-selection" element={<FuelSelection />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}