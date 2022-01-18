import { calculateStats } from "./stats-calculator";

describe("calculateStats", () => {
    it("should yield {0,0,0,0} w/ an empty list", () => {
        const actual = calculateStats([]);

        expect(actual).toEqual({ min: 0, max: 0, numElements: 0, avg: 0 });
    });

    it.each([
        [[1], { min: 1, max: 1, numElements: 1, avg: 1 }],
        [[2], { min: 2, max: 2, numElements: 1, avg: 2 }],
        [[3], { min: 3, max: 3, numElements: 1, avg: 3 }],
        [[10], { min: 10, max: 10, numElements: 1, avg: 10 }],
        [[50], { min: 50, max: 50, numElements: 1, avg: 50 }],
        [[1,-1], { min: -1, max: 1, numElements: 2, avg: 0 }],
        [[1,-1, 3], { min: -1, max: 3, numElements: 3, avg: 1 }],
        [[-3,-1,-5], { min: -5, max: -1, numElements: 3, avg: -3 }],
        [[6,9,15,-2,92,11], { min: -2, max: 92, numElements: 6, avg: 21.833333333333332 }]
    ])("calculateStats(%s) yields %s", (input, expected) => {
        expect(calculateStats(input)).toEqual(expected);
    });
});
