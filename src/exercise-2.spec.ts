import { mergeSortedArrays } from './exercise-2';

test('merges two arrays and sorts the numerically', () => {
    const array1 = [1, 3, 5];
    const array2 = [2, 4, 6];
    expect(mergeSortedArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);
});