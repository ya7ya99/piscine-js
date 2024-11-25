const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']

function addWeek(date) {
    const fixdate = Date.parse('0001-01-01')
    let diff = (date - fixdate) / (1000 * 60 * 60 * 24)
    return weekdays[diff % 14]

}

function timeTravel(obj) {   
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
}

