/**
 * Conservation-related types
 */

export enum ConservationStatus {
  LEAST_CONCERN = 'LEAST_CONCERN',
  NEAR_THREATENED = 'NEAR_THREATENED',
  VULNERABLE = 'VULNERABLE',
  ENDANGERED = 'ENDANGERED',
  CRITICALLY_ENDANGERED = 'CRITICALLY_ENDANGERED',
  EXTINCT_IN_WILD = 'EXTINCT_IN_WILD',
  EXTINCT = 'EXTINCT',
  DATA_DEFICIENT = 'DATA_DEFICIENT',
  NOT_EVALUATED = 'NOT_EVALUATED',
}

export interface Coordinates {
  latitude: number;
  longitude: number;
} 