/*
  # Set up admin user and policies

  1. Changes
    - Add admin user to admin_users table
    - Add policies for admin access
*/

-- Create admin user in admin_users table if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM admin_users 
    WHERE user_id IN (
      SELECT id FROM auth.users WHERE email = 'admin@123'
    )
  ) THEN
    INSERT INTO admin_users (user_id, is_super_admin)
    SELECT id, true 
    FROM auth.users 
    WHERE email = 'admin@123';
  END IF;
END $$;

-- Add policies for admin access
CREATE POLICY "Admins can view their own data"
  ON admin_users FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() 
      AND is_super_admin = true
    )
  );