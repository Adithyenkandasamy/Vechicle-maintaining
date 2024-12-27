import { supabase, hasSupabaseConfig } from '../config/supabase';
import { AuthError, AuthResponse } from '../types/auth';

const checkConnection = () => {
  if (!hasSupabaseConfig) {
    throw new Error('Supabase connection not configured');
  }
};

const formatAuthError = (error: any): string => {
  if (error.message === 'Invalid login credentials') {
    return 'Invalid email or password. Please try again.';
  }
  if (error.message.includes('Email not confirmed')) {
    return 'Please check your email to confirm your account.';
  }
  return error.message || 'An error occurred during authentication';
};

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  checkConnection();
  try {
    const { data, error } = await supabase!.auth.signInWithPassword({
      email: email.toLowerCase(),
      password,
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: formatAuthError(error) };
  }
};

export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  checkConnection();
  
  // Prevent creating new admin accounts
  if (email.toLowerCase() === 'admin@123') {
    return { 
      data: null, 
      error: 'Cannot create new admin accounts' 
    };
  }

  try {
    const { data, error } = await supabase!.auth.signUp({
      email: email.toLowerCase(),
      password,
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: formatAuthError(error) };
  }
};

export const signOut = async (): Promise<void> => {
  checkConnection();
  await supabase!.auth.signOut();
};