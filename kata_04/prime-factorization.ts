export const calculatePrimeFactors = (n: number, prims: number[] = []): number[] => {
    if (n < 2) {
        return [];
    }

    for (const prim of prims) {
        if (n % prim === 0) {
            return [prim, ...calculatePrimeFactors(n / prim, prims)];
        }
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prims.push(i);
            return [i, ...calculatePrimeFactors(n / i, prims)];
        }
    }

    prims.push(n);
    return [n];
};
