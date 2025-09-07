import { supabase } from '@/src/services/supabase';
import { SpeciesModel, SightingModel, UserModel } from '@/src/types/models';

export class SpeciesRepository {
  static async searchByName(query: string): Promise<SpeciesModel[]> {
    const { data, error } = await supabase
      .from('species')
      .select('*')
      .ilike('name', `%${query}%`)
      .limit(50);
    if (error) throw error;
    return data ?? [];
  }

  static async getById(id: number): Promise<SpeciesModel | null> {
    const { data, error } = await supabase.from('species').select('*').eq('id', id).maybeSingle();
    if (error) throw error;
    return data ?? null;
  }
}

export class SightingsRepository {
  static async create(sighting: Omit<SightingModel, 'created_at' | 'id'>): Promise<SightingModel> {
    const { data, error } = await supabase.from('sightings').insert(sighting).select('*').single();
    if (error) throw error;
    return data as SightingModel;
  }

  static async listByUser(userId: string, limit = 50): Promise<SightingModel[]> {
    const { data, error } = await supabase
      .from('sightings')
      .select('*')
      .eq('user_id', userId)
      .order('timestamp', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return data ?? [];
  }
}

export class UserRepository {
  static async getCurrentUser(): Promise<UserModel | null> {
    const session = await supabase.auth.getSession();
    const id = session.data.session?.user.id;
    if (!id) return null;
    const { data, error } = await supabase.from('users').select('*').eq('id', id).maybeSingle();
    if (error) throw error;
    return data ?? null;
  }
}


