import { Query } from "./types/Query";
import { Mutation } from "./types/Mutation";
import { File } from "./types/File";

export const typeDefs = `#graphql
  ${Query}
  ${File}
  ${Mutation}
`;
