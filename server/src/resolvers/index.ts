import { helloWorld } from "./helloWorld";
import { createFile } from "./createFile";

export const resolvers = {
  Query: {
    helloWorld,
  },
  Mutation: {
    createFile,
  },
};
