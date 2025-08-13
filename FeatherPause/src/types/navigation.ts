// Navigation types for FeatherPause app using Expo Router

export type RootStackParamList = {
  '(auth)': undefined;
  '(tabs)': undefined;
  '+not-found': undefined;
};

export type AuthStackParamList = {
  login: undefined;
  signup: undefined;
  'forgot-password': undefined;
};

export type TabsParamList = {
  index: undefined;
  identify: undefined;
  logbook: {
    // Optional parameters for filtering
    species?: string;
    dateRange?: {
      start: string;
      end: string;
    };
    location?: {
      latitude: number;
      longitude: number;
      radius?: number;
    };
  };
  learn: {
    // Optional parameters for specific content
    speciesId?: string;
    category?: 'guides' | 'tips' | 'conservation' | 'quizzes';
  };
  profile: undefined;
};

// Screen-specific parameter types for future use
export type IdentifyStackParamList = {
  camera: undefined;
  'audio-record': undefined;
  results: {
    identificationId: string;
    confidence: number;
    suggestions: Array<{
      speciesId: string;
      confidence: number;
    }>;
  };
  'size-comparison': {
    speciesId: string;
  };
};

export type LogbookStackParamList = {
  index: undefined;
  'sighting-detail': {
    sightingId: string;
  };
  'sighting-form': {
    sightingId?: string; // undefined for new sighting
    speciesId?: string; // pre-filled from identification
    mediaUri?: string; // pre-attached media
  };
  'sighting-edit': {
    sightingId: string;
  };
};

export type LearnStackParamList = {
  index: undefined;
  'species-guide': {
    speciesId: string;
  };
  'species-list': {
    category?: 'all' | 'common' | 'rare' | 'endangered';
    habitat?: string;
  };
  tutorial: {
    tutorialId: string;
  };
  quiz: {
    quizId: string;
  };
  'bird-of-day': undefined;
};

export type ProfileStackParamList = {
  index: undefined;
  settings: undefined;
  subscription: undefined;
  'privacy-policy': undefined;
  'terms-of-service': undefined;
  help: undefined;
  about: undefined;
};

// Combined navigation types for type-safe navigation
export type AllStackParamList = RootStackParamList & 
  AuthStackParamList & 
  TabsParamList & 
  IdentifyStackParamList & 
  LogbookStackParamList & 
  LearnStackParamList & 
  ProfileStackParamList;

// Common navigation props
export interface NavigationProps {
  navigation: any; // Will be properly typed when we add React Navigation types
  route: any;
}

// Screen component props with navigation
export interface ScreenProps<T extends keyof AllStackParamList> {
  navigation: any;
  route: {
    params: AllStackParamList[T];
  };
}

// Utility types for common patterns
export interface SightingData {
  id: string;
  speciesId: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    accuracy?: number;
    name?: string;
  };
  mediaUrls: string[];
  notes?: string;
  weather?: string;
  tags?: string[];
}

export interface SpeciesData {
  id: string;
  name: string;
  scientificName: string;
  commonNames: string[];
  conservationStatus: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX';
  averageLength: number; // in cm
  habitat: string[];
  description: string;
  fieldMarks: string[];
  callDescription?: string;
  imageUrls: string[];
  audioUrls?: string[];
}

export interface IdentificationResult {
  id: string;
  timestamp: string;
  mediaUri: string;
  mediaType: 'photo' | 'audio';
  suggestions: Array<{
    speciesId: string;
    confidence: number;
    reasoning?: string;
  }>;
  userCorrection?: {
    actualSpeciesId: string;
    timestamp: string;
  };
}