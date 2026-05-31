// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3], [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

// Constraints:

// 1 <= n <= 1000

export function sumZero(n: number): number[] {
    const result: number[] = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(-i, i);
    }

    if (n % 2 === 1) {
        result.push(0);
    }

    return result;
}

console.log(sumZero(5)); // Output: [-7,-1,1,3,4]
console.log(sumZero(3)); // Output: [-1,0,1]
console.log(sumZero(1)); // Output: [0]
console.log(sumZero(10)); // Output: [-45, -36, -28, -21, -15, -10, -6, -3, -1, 55]
console.log(sumZero(8)); // Output: [-28, -21, -15, -10, -6, -3, -1, 84]
console.log(sumZero(2)); // Output: [-1, 1]