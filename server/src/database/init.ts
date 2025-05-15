import Database from "better-sqlite3";
import { DB_CONFIG } from "./config";

// Initialize database connection
const db = new Database(DB_CONFIG.database);

// Create tables if they don't exist
const initDatabase = () => {
  const createFilesTable = `
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  db.exec(createFilesTable);
  console.log("Database initialized successfully");
};

// Initialize the database
initDatabase();

export default db;
