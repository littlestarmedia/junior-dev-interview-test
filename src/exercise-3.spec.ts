import { isPalindrome } from "./exercise-3";

test('correctly identifies a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
});