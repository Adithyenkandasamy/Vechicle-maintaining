/*
  # Set up admin user

  1. Changes
    - Insert default admin user into auth.users
    - Add admin user to admin_users table
    - Set admin as super admin
*/

-- Insert admin user if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users 
    WHERE email = 'admin@123'
  ) THEN
    -- Insert into auth.users
    INSERT INTO auth.users (
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin,
      role
    )
    VALUES (
      'admin@123',
      crypt('admin@123', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{}',
      true,
      'authenticated'
    );

    -- Get the user id
    WITH new_admin AS (
      SELECT id FROM auth.users WHERE email = 'admin@123'
    )
    -- Insert into admin_users
    INSERT INTO admin_users (user_id, is_super_admin)
    SELECT id, true FROM new_admin;
  END IF;
END $$;