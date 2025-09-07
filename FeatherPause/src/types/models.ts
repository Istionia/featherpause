export type IucnStatus = 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX';

export interface UserModel {
  id: string;
  email: string;
  is_pro: boolean;
  paddle_customer_id?: string;
  created_at: string;
}

export interface SpeciesModel {
  id: number;
  name: string;
  scientific_name?: string;
  iucn_status: IucnStatus;
  avg_length_cm?: number;
  created_at: string;
}

export interface SightingModel {
  id: string;
  user_id: string;
  species_id: number;
  lat: number;
  lon: number;
  timestamp: string;
  media_urls: string[];
  notes?: string;
  created_at: string;
}


