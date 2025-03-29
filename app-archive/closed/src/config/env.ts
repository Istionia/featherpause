import Constants from 'expo-constants';

interface EnvConfig {
  // App Configuration
  APP_ENV: 'development' | 'staging' | 'production';
  APP_NAME: string;
  APP_VERSION: string;

  // Supabase Configuration
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;

  // Sentry Configuration
  SENTRY_DSN: string;
  SENTRY_ENVIRONMENT: string;

  // API Keys
  EBIRD_API_KEY: string;
  STRIPE_PUBLISHABLE_KEY: string;
  REVENUECAT_API_KEY: string;

  // Feature Flags
  ENABLE_OFFLINE_MODE: boolean;
  ENABLE_AI_IDENTIFICATION: boolean;
  ENABLE_CONSERVATION_FEATURES: boolean;

  // Storage Configuration
  MAX_OFFLINE_STORAGE_MB: number;
  MAX_MEDIA_CACHE_MB: number;

  // Analytics
  ANALYTICS_ENABLED: boolean;
  ANALYTICS_ID: string;
}

const getEnvVar = (key: keyof EnvConfig): string => {
  const value = Constants.expoConfig?.extra?.[key];
  
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  
  return value;
};

const getBooleanEnvVar = (key: keyof EnvConfig): boolean => {
  const value = getEnvVar(key);
  return value.toLowerCase() === 'true';
};

const getNumberEnvVar = (key: keyof EnvConfig): number => {
  const value = getEnvVar(key);
  return parseInt(value, 10);
};

export const env: EnvConfig = {
  // App Configuration
  APP_ENV: getEnvVar('APP_ENV') as 'development' | 'staging' | 'production',
  APP_NAME: getEnvVar('APP_NAME'),
  APP_VERSION: getEnvVar('APP_VERSION'),

  // Supabase Configuration
  SUPABASE_URL: getEnvVar('SUPABASE_URL'),
  SUPABASE_ANON_KEY: getEnvVar('SUPABASE_ANON_KEY'),
  SUPABASE_SERVICE_ROLE_KEY: getEnvVar('SUPABASE_SERVICE_ROLE_KEY'),

  // Sentry Configuration
  SENTRY_DSN: getEnvVar('SENTRY_DSN'),
  SENTRY_ENVIRONMENT: getEnvVar('SENTRY_ENVIRONMENT'),

  // API Keys
  EBIRD_API_KEY: getEnvVar('EBIRD_API_KEY'),
  STRIPE_PUBLISHABLE_KEY: getEnvVar('STRIPE_PUBLISHABLE_KEY'),
  REVENUECAT_API_KEY: getEnvVar('REVENUECAT_API_KEY'),

  // Feature Flags
  ENABLE_OFFLINE_MODE: getBooleanEnvVar('ENABLE_OFFLINE_MODE'),
  ENABLE_AI_IDENTIFICATION: getBooleanEnvVar('ENABLE_AI_IDENTIFICATION'),
  ENABLE_CONSERVATION_FEATURES: getBooleanEnvVar('ENABLE_CONSERVATION_FEATURES'),

  // Storage Configuration
  MAX_OFFLINE_STORAGE_MB: getNumberEnvVar('MAX_OFFLINE_STORAGE_MB'),
  MAX_MEDIA_CACHE_MB: getNumberEnvVar('MAX_MEDIA_CACHE_MB'),

  // Analytics
  ANALYTICS_ENABLED: getBooleanEnvVar('ANALYTICS_ENABLED'),
  ANALYTICS_ID: getEnvVar('ANALYTICS_ID'),
}; 