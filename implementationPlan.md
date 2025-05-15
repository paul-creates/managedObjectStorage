# GraphQL Server Implementation Plan

## Overview

This document outlines the steps to create a basic GraphQL server using TypeScript, Node.js, and Apollo Server. The server will implement a simple "helloWorld" query that returns a hardcoded string.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- TypeScript knowledge
- Basic understanding of GraphQL concepts

## Implementation Steps

### 1. Project Setup

1. Navigate to the existing `server` directory
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
3. Install required dependencies:
   ```bash
   npm install @apollo/server graphql typescript @types/node
   ```
4. Install development dependencies:
   ```bash
   npm install --save-dev ts-node nodemon @types/graphql
   ```

### 2. TypeScript Configuration

1. Create a `tsconfig.json` file with the following configuration:
   ```json
   {
     "compilerOptions": {
       "target": "es2020",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "outDir": "./dist",
       "rootDir": "./src"
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```

### 3. Project Structure

Create the following directory structure:

```
src/
  ├── index.ts
  ├── schema/
  │   └── typeDefs.ts
  └── resolvers/
      └── index.ts
```

### 4. Implementation Details

#### 4.1 Schema Definition (src/schema/typeDefs.ts)

Create the GraphQL schema with the helloWorld query:

```typescript
export const typeDefs = `#graphql
  type Query {
    helloWorld: String!
  }
`;
```

#### 4.2 Resolver Implementation (src/resolvers/index.ts)

Implement the resolver for the helloWorld query:

```typescript
export const resolvers = {
  Query: {
    helloWorld: () => "Hello!",
  },
};
```

#### 4.3 Server Setup (src/index.ts)

Create the Apollo Server instance:

```typescript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
```

### 5. Scripts Configuration

Add the following scripts to `package.json`:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "build": "tsc"
  }
}
```
