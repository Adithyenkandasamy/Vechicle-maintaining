import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { isAdminEmail } from '../../services/adminAuth';
import { LoadingScreen } from '../auth/LoadingScreen';

export const AdminLayout = () => {
  const { user, isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!user || !isAdminEmail(user.email || '')) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};