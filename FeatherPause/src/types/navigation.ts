import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Navigator
export type AuthParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Identify Navigator
export type IdentifyParamList = {
  Camera: undefined;
  Audio: undefined;
  Results: { mediaUri: string; mediaType: 'photo' | 'audio' };
};

// Logbook Navigator
export type LogbookParamList = {
  List: undefined;
  Detail: { sightingId: string };
  Edit: { sightingId: string };
  Filter: undefined;
};

// Learn Navigator
export type LearnParamList = {
  Guide: undefined;
  Species: { speciesId: string };
  Tips: undefined;
  Quiz: undefined;
};

// Profile Navigator
export type ProfileParamList = {
  Settings: undefined;
  Subscription: undefined;
  Account: undefined;
  About: undefined;
};

// Tab Navigator
export type TabParamList = {
  Identify: NavigatorScreenParams<IdentifyParamList>;
  Logbook: NavigatorScreenParams<LogbookParamList>;
  Learn: NavigatorScreenParams<LearnParamList>;
  Profile: NavigatorScreenParams<ProfileParamList>;
};

// Root Navigator
export type RootParamList = {
  Auth: NavigatorScreenParams<AuthParamList>;
  Main: NavigatorScreenParams<TabParamList>;
};

// Declare global types for useNavigation and linking
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamList {}
  }
} 