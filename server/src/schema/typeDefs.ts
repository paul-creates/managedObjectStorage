export const typeDefs = `#graphql
  type Query {
    helloWorld: String!
  }

  type File {
    id: ID!
    name: String!
  }

  type Mutation {
    createFile(name: String!): File!
  }
`;
