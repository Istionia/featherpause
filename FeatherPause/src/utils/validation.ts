export function isValidLatitude(lat: number): boolean {
  return Number.isFinite(lat) && lat >= -90 && lat <= 90;
}

export function isValidLongitude(lon: number): boolean {
  return Number.isFinite(lon) && lon >= -180 && lon <= 180;
}

export function validateSightingInput(input: {
  species_id: number;
  lat: number;
  lon: number;
  timestamp: string | Date;
}): string[] {
  const errors: string[] = [];
  if (!input.species_id) errors.push('Species is required');
  if (!isValidLatitude(input.lat)) errors.push('Latitude is invalid');
  if (!isValidLongitude(input.lon)) errors.push('Longitude is invalid');
  const ts = typeof input.timestamp === 'string' ? new Date(input.timestamp) : input.timestamp;
  if (!(ts instanceof Date) || Number.isNaN(ts.getTime())) errors.push('Timestamp is invalid');
  if (ts > new Date()) errors.push('Timestamp cannot be in the future');
  return errors;
}


