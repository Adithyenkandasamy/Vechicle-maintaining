import { RouteObject } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { AdminLayout } from '../components/admin/AdminLayout';

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: AdminLayout,
    children: [
      {
        index: true,
        element: AdminDashboard,
      },
    ],
  },
];