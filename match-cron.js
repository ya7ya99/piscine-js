function matchCron(str, date) {
    str = str.split(" ")
    if (str[0] !== "*" && date.getMinutes() !== parseInt(str[0])) {
        return false
    } else if (str[1] !== "*" && date.getHours() !== parseInt(str[1])) {
        return false
    } else if (str[2] !== "*" && date.getDate() !== parseInt(str[2])) {
        return false
    } else if (str[3] !== "*" && date.getMonth() + 1 !== parseInt(str[3])) {
        return false
    } else if (str[4] !== "*" && date.getDay() !== parseInt(str[4])) {
        return false
    }
    return true
}