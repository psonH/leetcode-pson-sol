function isPalindrome(x: number): boolean {
    let revNum = 0;
    let originalNumber = x;
    while (x > 0) {
        revNum = revNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (revNum === originalNumber) return true;
    return false;
};