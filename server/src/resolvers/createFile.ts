import { fileOperations } from "../database/fileOperations";

export const createFile = (_: undefined, { name }: { name: string }) => {
  const fileRecord = fileOperations.createFile(name);
  return {
    id: fileRecord.id.toString(),
    name: fileRecord.filename,
  };
};
