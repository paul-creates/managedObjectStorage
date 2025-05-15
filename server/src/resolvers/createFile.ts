export const createFile = (_: undefined, { name }: { name: string }) => {
  // For now, this is a no-op implementation that just returns the input data
  return {
    id: `file-${Date.now()}`, // Generate a simple unique ID
    name,
  };
};
