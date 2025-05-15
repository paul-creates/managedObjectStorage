import { GraphQLError } from "graphql";
import { fileOperations } from "../database/fileOperations";

export const getFile = async (_: any, { id }: { id: string }) => {
  try {
    const file = fileOperations.getFile(parseInt(id));

    if (!file) {
      throw new GraphQLError("File not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return {
      id: file.id.toString(),
      name: file.filename,
      createdAt: file.created_at,
      updatedAt: file.updated_at,
    };
  } catch (error) {
    throw new GraphQLError("Error fetching file", {
      extensions: { code: "INTERNAL_SERVER_ERROR" },
    });
  }
};
