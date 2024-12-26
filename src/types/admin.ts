export interface AdminUser {
  id: string;
  user_id: string;
  is_super_admin: boolean;
  created_at: string;
}

export interface AdminState {
  isAdmin: boolean;
  isSuperAdmin: boolean;
}