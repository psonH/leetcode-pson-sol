// Implement a function called `countUniqueValues` that accepts a sorted array of integers and counts the unique values in the array. 
// There can be negative numbers in the array.
// The function should return the count of unique values.

export function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0;

    let uniqueCount = 1;

    for (let i = 0, j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            uniqueCount++;
            i = j;
        }
    }

    return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1])); // Output: 1
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4
console.log(countUniqueValues([1, 1, 2, 2, 3, 3, 4])); // Output: 4
console.log(countUniqueValues([-3, -2, -1, 0, 1, 2, 3])); // Output: 7
console.log(countUniqueValues([-1, -1, -1, -1])); // Output: 1
console.log(countUniqueValues([0, 0, 0, 0])); // Output: 1
console.log(countUniqueValues([-5, -4, -3, -2, -1])); // Output: 5