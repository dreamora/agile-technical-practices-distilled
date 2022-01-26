const roman = [
    { single: "I", mid: "V", upper: "X" },
    { single: "X", mid: "L", upper: "C" },
    { single: "C", mid: "D", upper: "M" },
    { single: "M", mid: "", upper: "" },
];

export const convertToRoman = (value: number, romanUnit = 0): string | undefined => {
    if (value < 0 || Math.floor(value) !== value) return undefined;

    const stringValue = value.toString();
    return (
        (stringValue.length > 1 ? convertToRoman(Number.parseInt(stringValue.slice(0, stringValue.length - 1)), romanUnit + 1) : "") +
        convertToLiteral(stringValue.at(stringValue.length - 1)!, roman[romanUnit])
    );
};

const convertToLiteral = (value: string, { single, mid, upper }: { single: string; mid: string; upper: string }): string => {
    const step = Number.parseInt(value) % 10;

    switch (step) {
        case 1:
        case 2:
        case 3:
            return single.repeat(step);

        case 4:
            return `${single}${mid}`;

        case 5:
            return mid;

        case 6:
        case 7:
        case 8:
            return `${mid}${single.repeat(step - 5)}`;

        case 9:
            return `${single}${upper}`;
        default:
            return "";
    }
};
