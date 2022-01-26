import { convertToRoman } from "./roman-numerals";

describe("convertToRoman", () => {
    it.each([
        [0, ""],
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [7, "VII"],
        [8, "VIII"],
        [9, "IX"],
    ])("convertToRoman(%d) is %s for units (0-9)", (input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    });

    it.each([
        [10, "X"],
        [20, "XX"],
        [30, "XXX"],
        [40, "XL"],
        [50, "L"],
        [60, "LX"],
        [70, "LXX"],
        [80, "LXXX"],
        [90, "XC"],
    ])("convertToRoman(%d) is %s for tenths (10, 20, ..., 90)", (input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    });

    it.each([
        [100, "C"],
        [200, "CC"],
        [300, "CCC"],
        [400, "CD"],
        [500, "D"],
        [600, "DC"],
        [700, "DCC"],
        [800, "DCCC"],
        [900, "CM"],
    ])("convertToRoman(%d) is %s for hundreds (100, 200, ..., 900)", (input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    });

    it.each([
        [1000, "M"],
        [2000, "MM"],
        [3000, "MMM"],
    ])("convertToRoman(%d) is %s for thousands (1000, 2000, 3000)", (input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    });

    it.each([
        [99, "XCIX"],
        [846, "DCCCXLVI"],
        [1999, "MCMXCIX"],
        [2008, "MMVIII"],
    ])("convertToRoman(%d) is %s", (input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    });
});
