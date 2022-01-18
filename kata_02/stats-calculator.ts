export const calculateStats = (dataPoints: number[]) => {
    if (dataPoints === undefined || dataPoints.length < 1) {
        return { min: 0, max: 0, numElements: 0, avg: 0 };
    }

    return {
        min: dataPoints.reduce((previousValue, currentValue) => Math.min(previousValue, currentValue)),
        max: dataPoints.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue)),
        numElements: dataPoints.length,
        avg: dataPoints.reduce((previousValue, currentValue) => previousValue + currentValue) / dataPoints.length,
    };
};
