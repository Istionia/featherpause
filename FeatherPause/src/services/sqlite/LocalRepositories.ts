import { DatabaseService } from '@/src/services/sqlite/DatabaseService';
import { SpeciesModel, SightingModel } from '@/src/types/models';

export class LocalSpeciesRepository {
  static async searchByName(query: string): Promise<SpeciesModel[]> {
    const db = DatabaseService.getInstance();
    const rows = await db.getAll<SpeciesModel>(
      `SELECT * FROM species WHERE name LIKE ? LIMIT 50`,
      [`%${query}%`]
    );
    return rows;
  }
}

export type LocalSightingInsert = Omit<SightingModel, 'created_at'>;

export class LocalSightingsRepository {
  static async create(item: LocalSightingInsert): Promise<void> {
    const db = DatabaseService.getInstance();
    await db.exec(
      `INSERT INTO sightings (id, user_id, species_id, lat, lon, timestamp, media_urls, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.id,
        item.user_id,
        item.species_id,
        item.lat,
        item.lon,
        item.timestamp,
        JSON.stringify(item.media_urls ?? []),
        item.notes ?? null,
      ]
    );
  }

  static async listByUser(userId: string, limit = 50): Promise<SightingModel[]> {
    const db = DatabaseService.getInstance();
    const rows = await db.getAll<SightingModel>(
      `SELECT * FROM sightings WHERE user_id = ? ORDER BY timestamp DESC LIMIT ?`,
      [userId, limit]
    );
    return rows.map((r) => ({ ...r, media_urls: JSON.parse((r as any).media_urls ?? '[]') }));
  }
}


