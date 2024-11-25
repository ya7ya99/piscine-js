function isValid(date) {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    return date instanceof Date && !isNaN(date.getTime());
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}
function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}
function isFuture(date) {
    const now = new Date();
    return isValid(date) && date > now;
}
function isPast(date) {
    const now = new Date();
    return isValid(date) && date < now;
}