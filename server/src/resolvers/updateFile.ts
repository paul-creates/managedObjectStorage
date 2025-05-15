import { GraphQLError } from "graphql";
import { fileOperations } from "../database/fileOperations";

export const updateFile = async (
  _: undefined,
  { id, name }: { id: string; name: string }
) => {
  try {
    const file = fileOperations.updateFile(parseInt(id), name);

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
    throw new GraphQLError("Error updating file", {
      extensions: { code: "INTERNAL_SERVER_ERROR" },
    });
  }
};
