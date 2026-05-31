export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const freqMapS = new Map<string, number>();
    const freqMapT = new Map<string, number>();

    for (const ch of s) {
        freqMapS.set(ch, (freqMapS.get(ch) || 0) + 1);
    }
    for (const ch of t) {
        freqMapT.set(ch, (freqMapT.get(ch) || 0) + 1);
    }

    if (freqMapS.size !== freqMapT.size) return false;
    for (const [key, count] of freqMapS) {
        if (freqMapT.get(key) !== count) return false;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("testwithtime", "timewithtest")); // true
console.log(isAnagram("hello", "world")); // false