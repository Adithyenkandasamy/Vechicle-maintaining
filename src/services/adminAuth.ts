import { supabase } from '../config/supabase';

export const isAdminEmail = (email: string) => email.toLowerCase() === 'admin@123';

export const checkAdminStatus = async (userId: string) => {
  const { data, error } = await supabase
    .from('admin_users')
    .select('is_super_admin')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error checking admin status:', error);
    return null;
  }

  return data;
};