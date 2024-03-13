import { isAnagram } from './exercise-5';

test('checks if one string is an anagram of another', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('hello', 'bello')).toBe(false);
});