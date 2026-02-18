/*
  # Pharmalovo Database Schema

  ## Overview
  Complete database schema for Pharmalovo digital health platform

  ## New Tables
  
  ### 1. profiles
  - `id` (uuid, primary key, references auth.users)
  - `full_name` (text)
  - `phone` (text)
  - `location` (text) - Governorate
  - `user_type` (text) - 'customer' or 'pharmacy'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. pharmacies
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `name` (text)
  - `name_ar` (text)
  - `address` (text)
  - `address_ar` (text)
  - `phone` (text)
  - `latitude` (numeric)
  - `longitude` (numeric)
  - `is_24_hours` (boolean)
  - `is_open` (boolean)
  - `rating` (numeric)
  - `reviews_count` (integer)
  - `services` (text array)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. medications
  - `id` (uuid, primary key)
  - `pharmacy_id` (uuid, references pharmacies)
  - `name` (text)
  - `name_ar` (text)
  - `generic_name` (text)
  - `category` (text)
  - `price` (numeric)
  - `availability` (text) - 'in-stock', 'low-stock', 'out-of-stock'
  - `requires_prescription` (boolean)
  - `dosage` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. orders
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `pharmacy_id` (uuid, references pharmacies)
  - `status` (text) - 'pending', 'processing', 'in_transit', 'delivered', 'cancelled'
  - `total_amount` (numeric)
  - `delivery_address` (text)
  - `payment_method` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. order_items
  - `id` (uuid, primary key)
  - `order_id` (uuid, references orders)
  - `medication_id` (uuid, references medications)
  - `quantity` (integer)
  - `price` (numeric)
  - `created_at` (timestamptz)

  ### 6. saved_medications
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `medication_id` (uuid, references medications)
  - `created_at` (timestamptz)

  ### 7. notifications
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `title` (text)
  - `message` (text)
  - `read` (boolean)
  - `created_at` (timestamptz)

  ### 8. loyalty_points
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `points` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - RLS enabled on all tables
  - Policies for authenticated users to manage their own data
  - Pharmacies can manage their own inventory
  - Customers can view all data but only modify their own
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  phone text,
  location text,
  user_type text NOT NULL DEFAULT 'customer' CHECK (user_type IN ('customer', 'pharmacy')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create pharmacies table
CREATE TABLE IF NOT EXISTS pharmacies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  name_ar text,
  address text NOT NULL,
  address_ar text,
  phone text NOT NULL,
  latitude numeric,
  longitude numeric,
  is_24_hours boolean DEFAULT false,
  is_open boolean DEFAULT true,
  rating numeric DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  reviews_count integer DEFAULT 0,
  services text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE pharmacies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view pharmacies"
  ON pharmacies FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Pharmacy owners can update own pharmacy"
  ON pharmacies FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Pharmacy owners can insert pharmacy"
  ON pharmacies FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create medications table
CREATE TABLE IF NOT EXISTS medications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pharmacy_id uuid REFERENCES pharmacies(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  name_ar text,
  generic_name text,
  category text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  availability text DEFAULT 'in-stock' CHECK (availability IN ('in-stock', 'low-stock', 'out-of-stock')),
  requires_prescription boolean DEFAULT false,
  dosage text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE medications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view medications"
  ON medications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Pharmacy owners can manage medications"
  ON medications FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM pharmacies
      WHERE pharmacies.id = medications.pharmacy_id
      AND pharmacies.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM pharmacies
      WHERE pharmacies.id = medications.pharmacy_id
      AND pharmacies.user_id = auth.uid()
    )
  );

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  pharmacy_id uuid REFERENCES pharmacies(id) ON DELETE SET NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'in_transit', 'delivered', 'cancelled')),
  total_amount numeric NOT NULL CHECK (total_amount >= 0),
  delivery_address text,
  payment_method text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Pharmacy owners can view orders for their pharmacy"
  ON orders FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM pharmacies
      WHERE pharmacies.id = orders.pharmacy_id
      AND pharmacies.user_id = auth.uid()
    )
  );

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  medication_id uuid REFERENCES medications(id) ON DELETE SET NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  price numeric NOT NULL CHECK (price >= 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view order items for own orders"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items"
  ON order_items FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Create saved_medications table
CREATE TABLE IF NOT EXISTS saved_medications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  medication_id uuid REFERENCES medications(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, medication_id)
);

ALTER TABLE saved_medications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own saved medications"
  ON saved_medications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own saved medications"
  ON saved_medications FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own notifications"
  ON notifications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications"
  ON notifications FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create loyalty_points table
CREATE TABLE IF NOT EXISTS loyalty_points (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  points integer DEFAULT 0 CHECK (points >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE loyalty_points ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own loyalty points"
  ON loyalty_points FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own loyalty points"
  ON loyalty_points FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_pharmacies_location ON pharmacies(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_medications_pharmacy ON medications(pharmacy_id);
CREATE INDEX IF NOT EXISTS idx_medications_category ON medications(category);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_pharmacy ON orders(pharmacy_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_saved_medications_user ON saved_medications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
