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
