function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false;
    const stack: string[] = [];
    const pairs: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
            continue;
        }

        // ch is a closing bracket
        const expectedOpen = pairs[ch];
        const top = stack.pop();
        if (top !== expectedOpen) return false;
    }

    return stack.length === 0;
}

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
console.log(isValid("")); // Output: true
console.log(isValid("((((((")); // Output: false
console.log(isValid("))))))")); // Output: false
console.log(isValid("({[({[({[]})]})]})")); // Output: true
console.log(isValid("({[({[({[]})]})]})]")); // Output: false
