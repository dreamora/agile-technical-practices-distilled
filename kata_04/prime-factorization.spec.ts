import { calculatePrimeFactors } from "./prime-factorization";

describe("calculatePrimeFactors", () => {
    it.each([
        [0, []],
        [1, []],
        [2, [2]],
        [4, [2, 2]],
        [6, [2, 3]],
        [8, [2, 2, 2]],
        [9, [3, 3]],
        [13, [13]],
        [221, [13, 17]],
        [1517, [37, 41]],
        [62197, [37, 41, 41]],
        [2550077, [37, 41, 41, 41]],
        [223092870, [2, 3, 5, 7, 11, 13, 17, 19, 23]],
    ])("calculatePrimeFactors(%d) is %s", (input, expected) => {
        const actual = calculatePrimeFactors(input);

        expect(actual).toEqual(expected);
    });

    it('should return an empty list of prime factors for 0', () => {
        const actual = calculatePrimeFactors(0);

        expect(actual).toEqual([]);
    });

    it('should return an empty list of prime factors for 1', () => {
        const actual = calculatePrimeFactors(1);

        expect(actual).toEqual([]);
    });

    it('should return a list of prime factors for 2', () => {
        const actual = calculatePrimeFactors(2);

        expect(actual).toEqual([2]);
    });
});
