import { RouteObject } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SolarCharging from '../pages/SolarCharging';
import TrafficData from '../pages/TrafficData';
import MaintenanceAlerts from '../pages/MaintenanceAlerts';
import SmartGrid from '../pages/SmartGrid';
import ChargingStations from '../pages/ChargingStations';
import FuelSelection from '../pages/FuelSelection';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: Login,
  },
  {
    path: '/dashboard',
    element: Dashboard,
  },
  {
    path: '/profile',
    element: Profile,
  },
  {
    path: '/solar-charging',
    element: SolarCharging,
  },
  {
    path: '/traffic-data',
    element: TrafficData,
  },
  {
    path: '/maintenance-alerts',
    element: MaintenanceAlerts,
  },
  {
    path: '/smart-grid',
    element: SmartGrid,
  },
  {
    path: '/charging-stations',
    element: ChargingStations,
  },
  {
    path: '/fuel-selection',
    element: FuelSelection,
  },
];