import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
};

export type IdentifyStackParamList = {
  IdentifyHome: undefined;
  Camera: undefined;
  Audio: undefined;
  Results: { speciesId: string };
};

export type LogbookStackParamList = {
  LogbookHome: undefined;
  SightingDetail: { sightingId: string };
  Filter: undefined;
};

export type LearnStackParamList = {
  LearnHome: undefined;
  SpeciesGuide: { speciesId: string };
  Quiz: undefined;
};

export type ProfileStackParamList = {
  ProfileHome: undefined;
  Settings: undefined;
  Subscription: undefined;
};

export type MainTabParamList = {
  Identify: NavigatorScreenParams<IdentifyStackParamList>;
  Logbook: NavigatorScreenParams<LogbookStackParamList>;
  Learn: NavigatorScreenParams<LearnStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
}; 