import { DatabaseService } from '@/src/services/sqlite/DatabaseService';

export type SyncOperation = 'create' | 'update' | 'delete';
export type SyncStatus = 'pending' | 'processing' | 'failed' | 'done';

export class SyncQueue {
  static async enqueue(entity: string, entity_id: string, operation: SyncOperation, payload: any) {
    const db = DatabaseService.getInstance();
    await db.exec(
      `INSERT INTO sync_queue (entity, entity_id, operation, payload, status)
       VALUES (?, ?, ?, ?, 'pending')`,
      [entity, entity_id, operation, JSON.stringify(payload)]
    );
  }

  static async nextBatch(limit = 20) {
    const db = DatabaseService.getInstance();
    return db.getAll(
      `SELECT * FROM sync_queue WHERE status = 'pending' ORDER BY id ASC LIMIT ?`,
      [limit]
    );
  }

  static async markProcessing(id: number) {
    const db = DatabaseService.getInstance();
    await db.exec(`UPDATE sync_queue SET status='processing', updated_at=datetime('now') WHERE id=?`, [id]);
  }

  static async markDone(id: number) {
    const db = DatabaseService.getInstance();
    await db.exec(`UPDATE sync_queue SET status='done', updated_at=datetime('now') WHERE id=?`, [id]);
  }

  static async markFailed(id: number) {
    const db = DatabaseService.getInstance();
    await db.exec(
      `UPDATE sync_queue SET status='failed', retry_count=retry_count+1, updated_at=datetime('now') WHERE id=?`,
      [id]
    );
  }
}


