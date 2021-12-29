import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
    it('should return ["1", "2"] w/ input 2', () => {
        const expected = ["1", "2"];

        const actual = fizzBuzz(2);

        expect(actual).toEqual(expected);
    });

    it('should return ["1", "2", "Fizz"] w/ input 3', () => {
        const expected = (index: number) => (index % 3 === 0 ? "Fizz" : index.toString());

        const actual = fizzBuzz(3);

        expect(actual).toHaveLength(3);
        actual.forEach((value, index) => {
            expect(value).toBe(expected(index + 1));
        });
    });

    it('should return ["4", "Buzz", "Fizz"] w/ input 6, 4', () => {
        const expected = (index: number) => (index % 3 === 0 ? "Fizz" : index % 5 === 0 ? "Buzz" : index.toString());
        const target = 4;

        const actual = fizzBuzz(6, target);

        expect(actual).toHaveLength(3);
        actual.forEach((value, index) => {
            expect(value).toBe(expected(target + index));
        });
    });

    it('should return ["14", "FizzBuzz", "16"] w/ input 16, 14', () => {
        const expected = (index: number) => (index % 15 === 0 ? "FizzBuzz" : index % 3 === 0 ? "Fizz" : index % 5 === 0 ? "Buzz" : index.toString());
        const target = 14;

        const actual = fizzBuzz(16, target);

        expect(actual).toHaveLength(3);
        actual.forEach((value, index) => {
            expect(value).toBe(expected(target + index));
        });
    });

    it("should return the correct sequence w/ input 100", () => {
        const expected = (index: number) => (index % 15 === 0 ? "FizzBuzz" : index % 3 === 0 ? "Fizz" : index % 5 === 0 ? "Buzz" : index.toString());

        const actual = fizzBuzz(100);

        expect(actual).toHaveLength(100);
        actual.forEach((value, index) => {
            expect(value).toBe(expected(index + 1));
        });
    });
});
