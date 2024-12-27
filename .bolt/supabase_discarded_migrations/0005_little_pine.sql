/*
  # Admin User Setup

  1. Changes
    - Checks if admin_users table exists before creating
    - Creates admin user if not exists
    - Adds admin policies if needed
  
  2. Security
    - Enables RLS
    - Adds policy for super admin access
*/

-- Only create admin_users table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'admin_users'
  ) THEN
    -- Create admin users table
    CREATE TABLE admin_users (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id uuid REFERENCES auth.users NOT NULL,
      is_super_admin boolean DEFAULT false,
      created_at timestamptz DEFAULT now()
    );

    -- Enable RLS
    ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create or replace the admin users policy
DROP POLICY IF EXISTS "Only super admins can view admin users" ON admin_users;
CREATE POLICY "Only super admins can view admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.is_super_admin = true
    )
  );

-- Insert default admin user if not exists
DO $$
BEGIN
  -- Create admin user in auth.users if not exists
  INSERT INTO auth.users (
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data
  )
  VALUES (
    'admin@123',
    crypt('123456', gen_salt('bf')),
    now(),
    '{"provider": "email", "providers": ["email"]}',
    '{"is_admin": true}'
  )
  ON CONFLICT (email) DO NOTHING;

  -- Add admin to admin_users table if not already present
  INSERT INTO admin_users (user_id, is_super_admin)
  SELECT id, true
  FROM auth.users
  WHERE email = 'admin@123'
  ON CONFLICT (user_id) DO NOTHING;
END $$;