export const fizzBuzz = (upperLimit: number, lowerLimit: number = 1): string[] => {
    const result: string[] = [...Array(upperLimit + 1).keys()].slice(lowerLimit).map(it => {
        let result = "";
        if (it % 3 === 0) result = "Fizz";
        if (it % 5 === 0) result += "Buzz";
        return result.length > 0 ? result : it.toString();
    });
    return result;
};
