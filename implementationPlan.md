# GraphQL CRUD Implementation Plan

## 1. Schema Updates

### File Type

```graphql
type File {
  id: ID!
  name: String!
  createdAt: String!
  updatedAt: String!
}
```

### Query Type

```graphql
type Query {
  file(id: ID!): File
  files: [File!]!
}
```

### Mutation Type

```graphql
type Mutation {
  createFile(name: String!): File!
  updateFile(id: ID!, name: String!): File
  deleteFile(id: ID!): Boolean!
}
```

## 2. Implementation Steps

### Step 1: Update Schema Files

1. Update `server/src/schema/types/File.ts` to include new fields
2. Update `server/src/schema/types/Query.ts` to add file queries
3. Update `server/src/schema/types/Mutation.ts` to add update and delete mutations

### Step 2: Create Resolvers

1. Create new resolver files:

   - `server/src/resolvers/getFile.ts`
   - `server/src/resolvers/getFiles.ts`
   - `server/src/resolvers/updateFile.ts`
   - `server/src/resolvers/deleteFile.ts`

2. Update `server/src/resolvers/index.ts` to include new resolvers

## 3. Example Queries

### Create File

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

### Get File

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

### Get All Files

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

### Update File

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

### Delete File

```graphql
mutation {
  deleteFile(id: "1")
}
```

## 5. Validation

Add input validation for:

- File name format
- ID format
- Required fields

## 6. Documentation

Update README.md with:

- New GraphQL operations
- Example queries
- Error handling information
