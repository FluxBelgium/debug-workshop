export const peekFirst = <T>(arr: T[]) => {
  // Get the first element of the array
  const first = arr[0];

  return first;
};

export const removeFirst = <T>(arr: T[]): T | undefined => {
  // Get the first element of the array
  const first = arr[0];

  // Delete the first element
  delete arr[0];

  return first;
};

export const split = <T>(arr: T[], index: number): [T[], T[]] => {
  // Check if the index is out of bounds
  if (index < 0 || index >= arr.length) {
    throw new Error(`Cannot split at ${index}: out of bounds`);
  }

  // Split the array into two halves
  const left = arr.slice(0, index);
  const right = arr.slice(index);

  return [left, right];
};
