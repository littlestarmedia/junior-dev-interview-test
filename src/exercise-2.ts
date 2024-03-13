export const mergeSortedArrays = (a: number[], b: number[]): number[] =>
    [...a, ...b].sort((x, y) => x - y);