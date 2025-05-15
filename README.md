# Managed Object Storage

A GraphQL-based object storage management system built with TypeScript and Apollo Server.

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm

### Server Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The server will start in development mode with hot-reloading enabled.

## Project Structure

- `server/` - Backend GraphQL server
  - `src/` - Source code
    - `schema/` - GraphQL schema definitions
    - `resolvers/` - GraphQL resolvers
    - `index.ts` - Server entry point

## Database

The application uses SQLite for data storage. The database file is located at `server/file_metadata.db`.

### Database Schema

The database contains a `files` table with the following structure:

```sql
CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Interacting with the Database

You can interact with the database directly using the SQLite command-line tool:

```bash
# Connect to the database
sqlite3 server/file_metadata.db

# Once connected, you can run SQL queries:
SELECT * FROM files;
INSERT INTO files (filename) VALUES ('example.txt');
UPDATE files SET filename = 'new_name.txt' WHERE id = 1;
DELETE FROM files WHERE id = 1;

# Useful SQLite commands:
.help          # Show all available commands
.tables        # List all tables
.schema        # Show database schema
.quit          # Exit SQLite
```

The database is automatically initialized when the server starts, creating the necessary tables if they don't exist.
