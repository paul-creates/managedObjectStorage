import { getFile } from "./getFile";
import { getFiles } from "./getFiles";
import { createFile } from "./createFile";
import { updateFile } from "./updateFile";
import { deleteFile } from "./deleteFile";

export const resolvers = {
  Query: {
    file: getFile,
    files: getFiles,
  },
  Mutation: {
    createFile,
    updateFile,
    deleteFile,
  },
};
