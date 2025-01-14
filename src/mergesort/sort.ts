import { peekFirst, removeFirst, split } from "./array";

type Comparable = number | string | Date;

/**
 * Sorts an array using the merge sort algorithm
 * @param arr the array to sort
 * @returns a new sorted array
 */
const mergeSort = <C extends Comparable>(arr: C[]): C[] => {
  // Base case: an array of 0 or 1 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Calculate the center of the array
  const center = Math.floor(arr.length / 2);

  // Split the array into two halves
  let [left, right] = split(arr, center);

  // Recursively sort each half
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge the sorted halves
  return merge(left, right);
};

/**
 * Merge two sorted arrays
 * @param left A sorted array
 * @param right A sorted array
 * @returns A new sorted array containing all elements from left and right
 */
const merge = <C extends Comparable>(left: C[], right: C[]): C[] => {
  const results: C[] = [];

  // While there are elements in both arrays
  while (left.length && right.length) {
    let smallest: C;

    const leftFirst = peekFirst(left);
    const rightFirst = peekFirst(right);

    // Compare the first elements of each array
    if (leftFirst <= rightFirst) {
      smallest = removeFirst(left)!;
    } else {
      smallest = removeFirst(right)!;
    }

    // Add the smaller element to the results
    results.push(smallest);
  }

  return [...results, ...left, ...right];
};

export default mergeSort;
