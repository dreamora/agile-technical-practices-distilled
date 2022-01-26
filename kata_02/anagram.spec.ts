import { createAnagrams } from "./anagram";

describe("createAnagrams", () => {
    it("should return an empty array w/ empty input", () => {
        const actual = createAnagrams("");

        expect(actual).toEqual([]);
    });

    it("should return an array with the input w/ 1 letter length input", () => {
        const actual = createAnagrams("e");

        expect(actual).toEqual(["e"]);
        expect(actual.length).toBe(factorial(1));
    });

    it("should return an array of all 2 permutations w/ 2 letter length input", () => {
        const actual = createAnagrams("ab");

        expect(actual).toEqual(expect.arrayContaining(["ab", "ba"]));
        expect(actual.length).toBe(factorial(2));
    });

    it("should return an array of all 6 permutations w/ 3 letter length input", () => {
        const actual = createAnagrams("abc");

        expect(actual).toEqual(expect.arrayContaining(["abc", "acb", "bac", "bca", "cab", "cba"]));
        expect(actual.length).toBe(factorial(3));
    });

    it("should return 7! permutations w/ 7 letter input", () => {
        const actual = createAnagrams("abcdefg");

        expect(actual.length).toBe(factorial(7));
    });
});

const factorial = (value: number): number => {
    if (value === 1) {
        return 1;
    }
    return value * factorial(value - 1);
};
