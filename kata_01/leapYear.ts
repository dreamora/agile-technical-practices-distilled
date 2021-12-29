export const leapYear = (year:number):boolean => {
    let leap = year % 4 === 0;
    if(leap && (year % 100 === 0)) leap = leap && (year % 400 === 0)
    return leap;
}