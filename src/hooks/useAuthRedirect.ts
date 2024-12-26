import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/auth';

export const useAuthRedirect = (user: User | null, redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(redirectPath);
    }
  }, [user, navigate, redirectPath]);
};