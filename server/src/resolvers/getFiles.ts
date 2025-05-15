import { GraphQLError } from "graphql";
import { fileOperations } from "../database/fileOperations";

export const getFiles = async () => {
  try {
    const files = fileOperations.getAllFiles();
    return files.map((file) => ({
      id: file.id.toString(),
      name: file.filename,
      createdAt: file.created_at,
      updatedAt: file.updated_at,
    }));
  } catch (error) {
    throw new GraphQLError("Error fetching files", {
      extensions: { code: "INTERNAL_SERVER_ERROR" },
    });
  }
};
