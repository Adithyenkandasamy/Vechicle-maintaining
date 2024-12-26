export interface User {
  id: string;
  email?: string;
  created_at?: string;
}

export interface AuthContextType {
  user: User | null;
  supabase: any;
  isInitialized: boolean;
}