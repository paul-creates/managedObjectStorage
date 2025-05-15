# Managed Object Storage

A GraphQL-based object storage management system built with TypeScript and Apollo Server.

## Why you chose to implement what you did

This server is self-contained, fully functional, and can be expanded upon easily. It could be completed within the time constraints. It forms the base and core of the full feature.

## Considerations, decisions, assumptions you made

- I decided to use significant Cursor assist to bring up the boilerplate of the server
- I decided to omit any kind of auth, or even the concept of a user as that can be added later
- I went with sqlite as it simplifies the development environment, however it would not be used in the production system
- I went with GraphQL as it'd be used in the complete feature. GraphQL can allow shared type definitions between the client and server
- Tests were omitted based on the interview environment, but would be included in real production code

Note: The timestamps on git commits don't accurately reflect the time I spent on this code. Coding was interrupted by helping a kid make their bed, singing bedtime songs, and consoling an upset kid.

## The next few improvements you’d make, and what challenges might exist

Next up would likely be a frontend for the files. Additionaly file paths could be added, as well as file ownership. File ownership would need to include both the organization, and the user.
File paths have a challenge in that the heirarchy must now be handled across the board.

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
sqlite3 server/database.db

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

## GraphQL API

The server provides a GraphQL API for managing files. You can access the GraphQL playground at `http://localhost:4000/graphql` when the server is running.

### Available Operations

#### Queries

- `file(id: ID!)`: Get a single file by ID
- `files`: Get all files

#### Mutations

- `createFile(name: String!)`: Create a new file
- `updateFile(id: ID!, name: String!)`: Update an existing file
- `deleteFile(id: ID!)`: Delete a file

### Example Queries

#### Create a File

```graphql
mutation {
  createFile(name: "example.txt") {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Get a File

```graphql
query {
  file(id: "1") {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Get All Files

```graphql
query {
  files {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Update a File

```graphql
mutation {
  updateFile(id: "1", name: "updated.txt") {
    id
    name
    createdAt
    updatedAt
  }
}
```

#### Delete a File

```graphql
mutation {
  deleteFile(id: "1")
}
```

### Error Handling

The API uses standard GraphQL error handling with the following error codes:

- `NOT_FOUND`: When a requested file doesn't exist
- `INTERNAL_SERVER_ERROR`: When an unexpected error occurs

Error responses include a message and an error code that can be used for error handling in client applications.
