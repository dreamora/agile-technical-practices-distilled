import { leapYear } from "./leapYear";

describe("leapYear", () => {
    it("should return false w/ year 2001", () => {
        const actual = leapYear(2001);

        expect(actual).toBe(false);
    });

    it("should return true w/ year 1996", () => {
        const actual = leapYear(1996);

        expect(actual).toBe(true);
    });

    it("should return true w/ year 2000", () => {
        const actual = leapYear(2000);

        expect(actual).toBe(true);
    });

    it("should return false w/ year 1900", () => {
        const actual = leapYear(1900);

        expect(actual).toBe(false);
    });
});
