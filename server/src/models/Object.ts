import db from "../config/database";

export interface ObjectData {
  id?: number;
  name: string;
  type: string;
  size?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Metadata {
  id?: number;
  object_id: number;
  key: string;
  value: string;
}

export class ObjectModel {
  static async create(objectData: ObjectData): Promise<ObjectData> {
    return new Promise((resolve, reject) => {
      const { name, type, size } = objectData;
      db.run(
        "INSERT INTO objects (name, type, size) VALUES (?, ?, ?)",
        [name, type, size],
        function (err) {
          if (err) {
            reject(err);
            return;
          }
          resolve({ ...objectData, id: this.lastID });
        }
      );
    });
  }

  static async getById(id: number): Promise<ObjectData | null> {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM objects WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve((row as ObjectData) || null);
      });
    });
  }

  static async getAll(): Promise<ObjectData[]> {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM objects", [], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows as ObjectData[]);
      });
    });
  }

  static async addMetadata(
    objectId: number,
    metadata: Metadata[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(
        "INSERT INTO metadata (object_id, key, value) VALUES (?, ?, ?)"
      );

      db.serialize(() => {
        db.run("BEGIN TRANSACTION");

        metadata.forEach(({ key, value }) => {
          stmt.run([objectId, key, value]);
        });

        stmt.finalize();

        db.run("COMMIT", (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    });
  }

  static async getMetadata(objectId: number): Promise<Metadata[]> {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM metadata WHERE object_id = ?",
        [objectId],
        (err, rows) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(rows as Metadata[]);
        }
      );
    });
  }
}
