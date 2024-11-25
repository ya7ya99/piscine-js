function isFriday(date) {
    return date.getDay() === 5
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 7
}

function isLeapYear(date) {
    const year = date.getFullYear()
    const date2 = new Date(year,0,1)
    const date3 = new Date(year+1,0,1)

    const d = (date3-date2)/(1000*60*60*24)
   
    return d === 366
}


function isLastDayOfMonth(date){
    const day = date.getDate()
    const month = date.getMonth()
    if (month == 0){
        return day === 31
    }else if (month == 1){
        if (!isLeapYear(date)){
            return day === 28
        }else{
            return day === 29
        }
    }else if (month == 2){
        return day === 31
    }else if (month == 3){
        return day === 30
    }else if (month == 4){
        return day === 31
    }else if (month == 5){
        return day === 30
    }else if (month == 6){
        return day === 31
    }else if (month == 7){
        return day === 31
    }else if (month == 8){
        return day === 30
    }else if (month == 9){
        return day === 31
    }else if (month == 10){
        return day === 30
    }else if (month == 11){
        return day === 31
    }
}