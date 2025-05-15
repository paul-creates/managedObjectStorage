import { GraphQLError } from "graphql";
import { fileOperations } from "../database/fileOperations";

export const deleteFile = async (_: any, { id }: { id: string }) => {
  try {
    const success = fileOperations.deleteFile(parseInt(id));

    if (!success) {
      throw new GraphQLError("File not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return true;
  } catch (error) {
    throw new GraphQLError("Error deleting file", {
      extensions: { code: "INTERNAL_SERVER_ERROR" },
    });
  }
};
