import { fibonacci } from "./fibonnaci";

describe("fibonacci", () => {
    it("should error w/ position small 1", () => {
        expect(() => fibonacci(0)).toThrow(`Position 0 must be >= 1 to be valid.`);
    });

    it("should return 0 w/ 1", () => {
        const actual = fibonacci(1);

        expect(actual).toBe(0);
    });

    it("should return 1 w/ 2", () => {
        const actual = fibonacci(2);

        expect(actual).toBe(1);
    });

    it("should return 1 w/ 3", () => {
        const actual = fibonacci(3);

        expect(actual).toBe(1);
    });

    it("should return 2 w/ 4", () => {
        const actual = fibonacci(4);

        expect(actual).toBe(2);
    });

    it("should return 3 w/ 5", () => {
        const actual = fibonacci(5);

        expect(actual).toBe(3);
    });

    it("should return 13 w/ 8", () => {
        const actual = fibonacci(8);

        expect(actual).toBe(13);
    });
});
