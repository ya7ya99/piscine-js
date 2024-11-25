function countLeapYears(date) {
    const year = date.getFullYear();
    let leapYearCount = 0;

    for (let i = 1; i < year; i++) {
        if (isLeapYear(i)) {
            leapYearCount++;
        }
    }
    
    return leapYearCount;
}


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
