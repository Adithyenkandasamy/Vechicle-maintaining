/*
  # Admin Policies and Functions

  1. Changes
    - Checks if admin_users table exists before creating
    - Creates super admin check function
    - Sets up admin access policies
  
  2. Security
    - Enables RLS
    - Adds policies for CRUD operations
    - Function is set as SECURITY DEFINER for proper access control
*/

-- Only create admin_users table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'admin_users'
  ) THEN
    CREATE TABLE admin_users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id uuid REFERENCES auth.users NOT NULL,
      is_super_admin boolean DEFAULT false,
      created_at timestamptz DEFAULT now(),
      UNIQUE(user_id)
    );

    -- Enable RLS
    ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create or replace the super admin check function
CREATE OR REPLACE FUNCTION is_super_admin(user_uid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE user_id = user_uid
    AND is_super_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Super admins can view all admin users" ON admin_users;
  DROP POLICY IF EXISTS "Super admins can insert admin users" ON admin_users;
  DROP POLICY IF EXISTS "Super admins can update admin users" ON admin_users;
  DROP POLICY IF EXISTS "Super admins can delete admin users" ON admin_users;
END $$;

-- Create new policies
CREATE POLICY "Super admins can view all admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (is_super_admin(auth.uid()));

CREATE POLICY "Super admins can insert admin users"
  ON admin_users FOR INSERT
  TO authenticated
  WITH CHECK (is_super_admin(auth.uid()));

CREATE POLICY "Super admins can update admin users"
  ON admin_users FOR UPDATE
  TO authenticated
  USING (is_super_admin(auth.uid()))
  WITH CHECK (is_super_admin(auth.uid()));

CREATE POLICY "Super admins can delete admin users"
  ON admin_users FOR DELETE
  TO authenticated
  USING (is_super_admin(auth.uid()));