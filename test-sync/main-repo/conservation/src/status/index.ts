/**
 * Conservation status services and utilities
 */

import { ConservationStatus } from '../types';

/**
 * Service for checking conservation statuses
 */
export class ConservationService {
  /**
   * Check if a species is endangered
   */
  static isEndangered(scientificName: string): boolean {
    // This would be implemented with a proper database or API
    const endangeredSpecies = [
      'Gymnogyps californianus', // California Condor
      'Spheniscus mendiculus',   // Galapagos Penguin
      'Amazona vittata'          // Puerto Rican Amazon
    ];
    
    return endangeredSpecies.includes(scientificName);
  }
  
  /**
   * Get conservation status for a species
   */
  static getSpeciesStatus(scientificName: string): ConservationStatus {
    // Placeholder implementation
    if (this.isEndangered(scientificName)) {
      return ConservationStatus.ENDANGERED;
    }
    return ConservationStatus.LEAST_CONCERN;
  }
  
  /**
   * Check if coordinates should be obfuscated for this species
   */
  static shouldObfuscateCoordinates(scientificName: string): boolean {
    const status = this.getSpeciesStatus(scientificName);
    return [
      ConservationStatus.ENDANGERED,
      ConservationStatus.CRITICALLY_ENDANGERED,
      ConservationStatus.EXTINCT_IN_WILD
    ].includes(status);
  }
} 