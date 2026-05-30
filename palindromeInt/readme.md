# Palindrome Number

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## Examples

### Example 1
Input: `x = 121`  
Output: `true`  
Explanation: `121` reads the same forwards and backwards.

### Example 2
Input: `x = -121`  
Output: `false`  
Explanation: From left to right it reads `-121`; from right to left it becomes `121-`, so it's not a palindrome.

### Example 3
Input: `x = 10`  
Output: `false`  
Explanation: From right to left it reads `01`, which is different.

## Constraints

- -2^31 <= x <= 2^31 - 1

## Notes

- Negative numbers are not palindromes due to the leading `-` sign.
- Do not convert the integer to a string if a numeric solution is desired.
