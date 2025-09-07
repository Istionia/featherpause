// Note: Requires expo-sqlite. Run: npm install expo-sqlite
import * as SQLite from 'expo-sqlite';

export type SqliteDatabase = any;

export class DatabaseService {
  private static instance: DatabaseService | null = null;
  private db: SqliteDatabase | null = null;

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async open(): Promise<SqliteDatabase> {
    if (this.db) return this.db;
    // Try async API, then sync API
    // @ts-ignore
    if (SQLite.openDatabaseAsync) {
      // @ts-ignore
      this.db = await SQLite.openDatabaseAsync('featherpause.db');
    } else if ((SQLite as any).openDatabaseSync) {
      // @ts-ignore
      this.db = (SQLite as any).openDatabaseSync('featherpause.db');
    } else {
      // @ts-ignore
      this.db = (SQLite as any).openDatabase?.('featherpause.db');
    }
    await this.initialize();
    return this.db;
  }

  private async initialize(): Promise<void> {
    const db = await this.open();
    // Create tables mirroring Supabase minimal subset
    await this.exec(
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY NOT NULL,
        email TEXT UNIQUE,
        is_pro INTEGER DEFAULT 0,
        paddle_customer_id TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );`
    );

    await this.exec(
      `CREATE TABLE IF NOT EXISTS species (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        scientific_name TEXT,
        iucn_status TEXT NOT NULL,
        avg_length_cm REAL,
        created_at TEXT DEFAULT (datetime('now'))
      );`
    );

    await this.exec(
      `CREATE TABLE IF NOT EXISTS sightings (
        id TEXT PRIMARY KEY NOT NULL,
        user_id TEXT NOT NULL,
        species_id INTEGER NOT NULL,
        lat REAL NOT NULL,
        lon REAL NOT NULL,
        timestamp TEXT NOT NULL,
        media_urls TEXT,
        notes TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      );`
    );

    // Sync queue
    await this.exec(
      `CREATE TABLE IF NOT EXISTS sync_queue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        entity TEXT NOT NULL,
        entity_id TEXT NOT NULL,
        operation TEXT NOT NULL, -- create|update|delete
        payload TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending', -- pending|processing|failed|done
        retry_count INTEGER DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT
      );`
    );
  }

  async exec(sql: string, params: any[] = []): Promise<void> {
    const db = await this.open();
    // @ts-ignore
    if (db.execAsync) {
      // @ts-ignore
      await db.execAsync(sql, params);
      return;
    }
    await new Promise<void>((resolve, reject) => {
      db.transaction((tx: any) => {
        tx.executeSql(
          sql,
          params,
          () => resolve(),
          (_tx: any, error: any) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  async getAll<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const db = await this.open();
    // @ts-ignore
    if (db.getAllAsync) {
      // @ts-ignore
      const rows = await db.getAllAsync(sql, params);
      return rows as T[];
    }
    return new Promise<T[]>((resolve, reject) => {
      db.readTransaction((tx: any) => {
        tx.executeSql(
          sql,
          params,
          (_tx: any, rs: any) => {
            const out: T[] = [] as T[];
            for (let i = 0; i < rs.rows.length; i++) {
              // @ts-ignore
              out.push(rs.rows.item(i));
            }
            resolve(out);
          },
          (_tx: any, error: any) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
}


