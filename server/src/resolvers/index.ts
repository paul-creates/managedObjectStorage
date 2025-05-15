export const resolvers = {
  Query: {
    helloWorld: () => "Hello!",
  },
  Mutation: {
    createFile: (_: any, { name }: { name: string }) => {
      // For now, this is a no-op implementation that just returns the input data
      return {
        id: `file-${Date.now()}`, // Generate a simple unique ID
        name,
      };
    },
  },
};
