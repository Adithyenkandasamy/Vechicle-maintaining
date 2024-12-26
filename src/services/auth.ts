import { supabase, hasSupabaseConfig } from '../config/supabase';

const checkConnection = () => {
  if (!hasSupabaseConfig) {
    throw new Error('Supabase connection not configured');
  }
};

export const signIn = async (email: string, password: string) => {
  checkConnection();
  const { data, error } = await supabase!.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signUp = async (email: string, password: string) => {
  checkConnection();
  const { data, error } = await supabase!.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const createAdminUser = async (userId: string, isSuperAdmin: boolean = false) => {
  checkConnection();
  const { data, error } = await supabase!
    .from('admin_users')
    .insert([
      { user_id: userId, is_super_admin: isSuperAdmin }
    ])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};