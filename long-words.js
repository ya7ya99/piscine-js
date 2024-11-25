function longWords(arr) {
    return arr.every(a => a.length > 5)
}

function oneLongWord(arr) {
    return arr.some(a => a.length > 10)
}

function noLongWords(arr) {
    return arr.every(a => a.length < 7)
}
console.log(oneLongWord(['zxcggv','fsgggg','rshdhgjffkfdjgag']))