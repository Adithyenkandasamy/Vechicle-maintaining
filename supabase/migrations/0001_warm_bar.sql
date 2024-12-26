/*
  # Initial Schema Setup for Vehicle Maintenance App

  1. New Tables
    - `vehicles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `make` (text)
      - `model` (text)
      - `year` (integer)
      - `vin` (text)
      - `created_at` (timestamp)
    
    - `maintenance_records`
      - `id` (uuid, primary key)
      - `vehicle_id` (uuid, references vehicles)
      - `service_type` (text)
      - `mileage` (integer)
      - `date` (date)
      - `notes` (text)
      - `cost` (decimal)
      - `created_at` (timestamp)
    
    - `maintenance_schedules`
      - `id` (uuid, primary key)
      - `vehicle_id` (uuid, references vehicles)
      - `service_type` (text)
      - `interval_months` (integer)
      - `interval_miles` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create vehicles table
CREATE TABLE vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  vin text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT year_range CHECK (year >= 1900 AND year <= date_part('year', now()) + 1)
);

-- Create maintenance_records table
CREATE TABLE maintenance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id uuid REFERENCES vehicles ON DELETE CASCADE NOT NULL,
  service_type text NOT NULL,
  mileage integer NOT NULL,
  date date NOT NULL,
  notes text,
  cost decimal(10,2),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT positive_mileage CHECK (mileage >= 0),
  CONSTRAINT positive_cost CHECK (cost >= 0)
);

-- Create maintenance_schedules table
CREATE TABLE maintenance_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id uuid REFERENCES vehicles ON DELETE CASCADE NOT NULL,
  service_type text NOT NULL,
  interval_months integer,
  interval_miles integer,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT positive_interval_months CHECK (interval_months IS NULL OR interval_months > 0),
  CONSTRAINT positive_interval_miles CHECK (interval_miles IS NULL OR interval_miles > 0),
  CONSTRAINT require_one_interval CHECK (interval_months IS NOT NULL OR interval_miles IS NOT NULL)
);

-- Enable Row Level Security
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_schedules ENABLE ROW LEVEL SECURITY;

-- Create policies for vehicles
CREATE POLICY "Users can view their own vehicles"
  ON vehicles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own vehicles"
  ON vehicles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own vehicles"
  ON vehicles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own vehicles"
  ON vehicles FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for maintenance_records
CREATE POLICY "Users can view their vehicles' maintenance records"
  ON maintenance_records FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_records.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can create maintenance records for their vehicles"
  ON maintenance_records FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_records.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can update maintenance records for their vehicles"
  ON maintenance_records FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_records.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete maintenance records for their vehicles"
  ON maintenance_records FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_records.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

-- Create policies for maintenance_schedules
CREATE POLICY "Users can view their vehicles' maintenance schedules"
  ON maintenance_schedules FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_schedules.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can create maintenance schedules for their vehicles"
  ON maintenance_schedules FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_schedules.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can update maintenance schedules for their vehicles"
  ON maintenance_schedules FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_schedules.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete maintenance schedules for their vehicles"
  ON maintenance_schedules FOR DELETE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM vehicles
    WHERE vehicles.id = maintenance_schedules.vehicle_id
    AND vehicles.user_id = auth.uid()
  ));

-- Create indexes for better query performance
CREATE INDEX vehicles_user_id_idx ON vehicles(user_id);
CREATE INDEX maintenance_records_vehicle_id_idx ON maintenance_records(vehicle_id);
CREATE INDEX maintenance_schedules_vehicle_id_idx ON maintenance_schedules(vehicle_id);