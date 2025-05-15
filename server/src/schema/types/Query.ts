export const Query = `#graphql
  type Query {
    file(id: ID!): File
    files: [File!]!
  }
`;
