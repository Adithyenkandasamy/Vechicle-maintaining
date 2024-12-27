/*
  # Update Admin Policies

  1. Changes
    - Ensures admin user exists in admin_users table
    - Safely adds admin access policy if it doesn't exist
  
  2. Security
    - Maintains proper access control
    - Preserves existing policies
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

-- Safely add policy if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'admin_users' 
    AND policyname = 'Admins can view their own data'
  ) THEN
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
  END IF;
END $$;