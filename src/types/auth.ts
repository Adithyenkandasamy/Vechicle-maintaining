export interface User {
  id: string;
  email?: string;
  created_at?: string;
}

export interface AuthError {
  message: string;
}

export interface AuthResponse {
  data: any | null;
  error: string | null;
}

export interface AuthContextType {
  user: User | null;
  supabase: any;
  isInitialized: boolean;
}