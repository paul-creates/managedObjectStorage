export const Mutation = `#graphql
  type Mutation {
    createFile(name: String!): File!
    updateFile(id: ID!, name: String!): File
    deleteFile(id: ID!): Boolean!
  }
`;
