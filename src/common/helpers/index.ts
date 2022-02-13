export const generateElementUniqueId = (originalId: string | number) =>
  originalId + "-" + Math.random();
