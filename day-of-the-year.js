function dayOfTheYear(date) {
    const year = date.getFullYear()

    const startYear = new Date(year, 0, 1)

    const d = date - startYear
    
    const days = Math.floor(d/ (1000 * 60 * 60 * 24)) + 1
    if (days<0){
        return 1
    }
    return days
}


console.log(dayOfTheYear(new Date('0001-01-01'))); // === 1

