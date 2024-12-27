/*
  # Create Default Admin User

  1. Changes
    - Creates admin user in auth.users if not exists
    - Links admin user to admin_users table
    - Sets proper UUID and timestamps
  
  2. Security
    - Uses proper password hashing
    - Sets up admin privileges
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users 
    WHERE email = 'admin@123'
  ) THEN
    -- Insert into auth.users with proper UUID generation
    INSERT INTO auth.users (
      id,
      instance_id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      aud,
      role
    )
    VALUES (
      gen_random_uuid(), -- Generate UUID for id
      '00000000-0000-0000-0000-000000000000', -- Default instance_id
      'admin@123',
      crypt('admin@123', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{"is_admin":true}',
      'authenticated',
      'authenticated'
    );

    -- Link to admin_users table
    INSERT INTO admin_users (user_id, is_super_admin)
    SELECT id, true
    FROM auth.users
    WHERE email = 'admin@123'
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
END $$;