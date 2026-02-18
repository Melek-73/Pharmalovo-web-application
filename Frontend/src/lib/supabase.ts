import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  phone?: string;
  location?: string;
  user_type: 'customer' | 'pharmacy';
  created_at: string;
  updated_at: string;
};

export type Pharmacy = {
  id: string;
  user_id: string;
  name: string;
  name_ar?: string;
  address: string;
  address_ar?: string;
  phone: string;
  latitude?: number;
  longitude?: number;
  is_24_hours: boolean;
  is_open: boolean;
  rating: number;
  reviews_count: number;
  services?: string[];
  created_at: string;
  updated_at: string;
};

export type Medication = {
  id: string;
  pharmacy_id: string;
  name: string;
  name_ar?: string;
  generic_name?: string;
  category: string;
  price: number;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  requires_prescription: boolean;
  dosage?: string;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  pharmacy_id?: string;
  status: 'pending' | 'processing' | 'in_transit' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_address?: string;
  payment_method?: string;
  created_at: string;
  updated_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  medication_id?: string;
  quantity: number;
  price: number;
  created_at: string;
};

export type SavedMedication = {
  id: string;
  user_id: string;
  medication_id: string;
  created_at: string;
};

export type Notification = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
};

export type LoyaltyPoints = {
  id: string;
  user_id: string;
  points: number;
  created_at: string;
  updated_at: string;
};
