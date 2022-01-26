export const fibonacci = (position: number): number => {
    if (position < 1) throw new Error(`Position ${position} must be >= 1 to be valid.`);

    return calcFibonacci(position);
};

const calcFibonacci = (position: number): number => {
    if (position === 1) return 0;
    if (position === 2) return 1;
    return calcFibonacci(position - 1) + calcFibonacci(position - 2);
};
