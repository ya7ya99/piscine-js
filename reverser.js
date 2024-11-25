function reverse(str) {
    let res = []
    for (let i = str.length-1 ; i >= 0;i-- ) {
        res.push(str[i])
    }

    if (typeof str == "object") {
        return res
    } else {
        return res.join('')
    }
}
