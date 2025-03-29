import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { env } from '../config/env';

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Database types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          updated_at: string;
          full_name: string | null;
          avatar_url: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          avatar_url?: string | null;
        };
      };
      species: {
        Row: {
          id: string;
          common_name: string;
          scientific_name: string;
          iucn_status: string;
          avg_length_cm: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          common_name: string;
          scientific_name: string;
          iucn_status: string;
          avg_length_cm: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          common_name?: string;
          scientific_name?: string;
          iucn_status?: string;
          avg_length_cm?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      sightings: {
        Row: {
          id: string;
          user_id: string;
          species_id: string;
          lat: number;
          lon: number;
          timestamp: string;
          notes: string | null;
          media_urls: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          species_id: string;
          lat: number;
          lon: number;
          timestamp: string;
          notes?: string | null;
          media_urls?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          species_id?: string;
          lat?: number;
          lon?: number;
          timestamp?: string;
          notes?: string | null;
          media_urls?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
} 