import { calculateBoolean } from "./boolean-calculator";

describe("calculateBolean", () => {
    it('should calculate true w/ "TRUE" ', () => {
        const actual = calculateBoolean("TRUE");

        expect(actual).toBe(true);
    });

    it('should calculate false w/ "FALSE"', () => {
        const actual = calculateBoolean("FALSE");

        expect(actual).toBe(false);
    });

    it('should calculate false w/ "NOT TRUE"', () => {
        const actual = calculateBoolean("NOT TRUE");

        expect(actual).toBe(false);
    });

    it('should calculate true w/ "NOT FALSE"', () => {
        const actual = calculateBoolean("NOT FALSE");

        expect(actual).toBe(true);
    });

    it('should calculate true w/ "TRUE AND TRUE"', () => {
        const actual = calculateBoolean("TRUE AND TRUE");

        expect(actual).toBe(true);
    });

    it('should calculate false w/ "TRUE AND FALSE"', () => {
        const actual = calculateBoolean("TRUE AND FALSE");

        expect(actual).toBe(false);
    });

    it('should calculate false w/ "FALSE AND TRUE"', () => {
        const actual = calculateBoolean("FALSE AND TRUE");

        expect(actual).toBe(false);
    });

    it('should calculate false w/ "FALSE AND FALSE"', () => {
        const actual = calculateBoolean("FALSE AND FALSE");

        expect(actual).toBe(false);
    });

    it('should calculate false w/ "TRUE AND TRUE AND FALSE"', () => {
        const actual = calculateBoolean("TRUE AND TRUE AND FALSE");

        expect(actual).toBe(false);
    });

    it('should calculate true w/ "TRUE AND TRUE AND NOT FALSE"', () => {
        const actual = calculateBoolean("TRUE AND TRUE AND NOT FALSE");

        expect(actual).toBe(true);
    });

    it('should calculate false w/ "FALSE AND FALSE AND TRUE"', () => {
        const actual = calculateBoolean("FALSE AND FALSE AND TRUE");

        expect(actual).toBe(false);
    });

    it('should calculate true w/ "TRUE OR TRUE"', () => {
        const actual = calculateBoolean("TRUE OR TRUE");

        expect(actual).toBe(true);
    });

    it('should calculate true w/ "TRUE OR FALSE"', () => {
        const actual = calculateBoolean("TRUE OR FALSE");

        expect(actual).toBe(true);
    });

    it('should calculate true w/ "FALSE OR TRUE"', () => {
        const actual = calculateBoolean("FALSE OR TRUE");

        expect(actual).toBe(true);
    });

    it('should calculate false w/ "FALSE OR FALSE"', () => {
        const actual = calculateBoolean("FALSE OR FALSE");

        expect(actual).toBe(false);
    });

    // Equivalent to TRUE  OR TRUE OR (TRUE AND FALSE)
    it('should calculate true w/ "TRUE OR TRUE OR TRUE AND FALSE"', () => {
        const actual = calculateBoolean("TRUE OR TRUE OR TRUE AND FALSE");

        expect(actual).toBe(true);
    });

    it('should calculate true w/ "TRUE OR FALSE AND NOT FALSE"', () => {
        const actual = calculateBoolean("TRUE OR FALSE AND NOT FALSE");

        expect(actual).toBe(true);
    });

    it('should calculate false w/ "(TRUE OR TRUE OR TRUE) AND FALSE"', () => {
        const actual = calculateBoolean("(TRUE OR TRUE OR TRUE) AND FALSE");

        expect(actual).toBe(false);
    });

    it('should calculate  w/ "NOT (TRUE AND TRUE)"', () => {
        const actual = calculateBoolean("NOT (TRUE AND TRUE)");

        expect(actual).toBe(false);
    });
});
