import db from "./init";

export interface FileRecord {
  id: number;
  filename: string;
  created_at: string;
  updated_at: string;
}

export const fileOperations = {
  // Create a new file record
  createFile: (filename: string): FileRecord => {
    const stmt = db.prepare("INSERT INTO files (filename) VALUES (?)");
    const result = stmt.run(filename);
    return {
      id: result.lastInsertRowid as number,
      filename,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  },

  // Get a file record by ID
  getFile: (id: number): FileRecord | undefined => {
    const stmt = db.prepare("SELECT * FROM files WHERE id = ?");
    return stmt.get(id) as FileRecord | undefined;
  },

  // Get all file records
  getAllFiles: (): FileRecord[] => {
    const stmt = db.prepare("SELECT * FROM files ORDER BY created_at DESC");
    return stmt.all() as FileRecord[];
  },

  // Update a file record
  updateFile: (id: number, filename: string): FileRecord | undefined => {
    const stmt = db.prepare(
      "UPDATE files SET filename = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
    );
    const result = stmt.run(filename, id);
    if (result.changes > 0) {
      return fileOperations.getFile(id);
    }
    return undefined;
  },

  // Delete a file record
  deleteFile: (id: number): boolean => {
    const stmt = db.prepare("DELETE FROM files WHERE id = ?");
    const result = stmt.run(id);
    return result.changes > 0;
  },
};
