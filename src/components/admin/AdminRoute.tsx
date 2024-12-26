import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../hooks/useAdmin';
import { LoadingScreen } from '../auth/LoadingScreen';

interface AdminRouteProps {
  children: React.ReactNode;
  requireSuperAdmin?: boolean;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ 
  children, 
  requireSuperAdmin = false 
}) => {
  const { isAdmin, isSuperAdmin } = useAdmin();

  if (!isAdmin || (requireSuperAdmin && !isSuperAdmin)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};