import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, hasSupabaseConfig } from '../config/supabase';
import { LoadingScreen } from '../components/auth/LoadingScreen';
import { ConnectionStatus } from '../components/auth/ConnectionStatus';
import { AuthContextType, User } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!hasSupabaseConfig) {
      setIsInitialized(true);
      return;
    }

    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase!.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase!.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!hasSupabaseConfig) {
    return (
      <ConnectionStatus 
        message="To use this application, you need to connect to Supabase first."
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, supabase: supabase!, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};