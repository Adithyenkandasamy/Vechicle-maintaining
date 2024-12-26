import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminState } from '../types/admin';

export const useAdmin = () => {
  const { user, supabase } = useAuth();
  const [adminState, setAdminState] = useState<AdminState>({
    isAdmin: false,
    isSuperAdmin: false,
  });

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('admin_users')
        .select('is_super_admin')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error checking admin status:', error);
        return;
      }

      setAdminState({
        isAdmin: !!data,
        isSuperAdmin: data?.is_super_admin || false,
      });
    };

    checkAdminStatus();
  }, [user, supabase]);

  return adminState;
};