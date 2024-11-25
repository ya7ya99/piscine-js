function round(num) {
    let x = num
    let c = 0
    let is = false
    if (num < 0) {
        x *= -1
        is = true
    }
    while (x > 1) {
        x -= 1
        c++
    }
    x = x*10
    if (x >= 5){
        c++
    }
    if (is) {
        return -c
    }
    return c
}


function ceil(num) {
    let is = false
    if (num < 0) {
        num *= -1
        is = true
    }
    let x = num
    let c = 0
    while (x > 1) {
        x -= 1
        c++
    }
    x = x*10
    if (is) {
        return -c
    }
    if (x > 0){
        c++
    }
    return c
}
function floor(num) {
    let c = 0
    let is = false
    if (num < 0) {
        num *= -1
        is = true
    }
    while (num > 1) {
        num -= 1
        c++
    }
   
    if (is) {
        c++
        return -c
    }
    return c
}
function trunc(num) {
    let c = 0
    let is = false
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        c += 0xfffffffff;
    }
    if (num < 0) {
        num *= -1
        is = true
    }
    while (num > 1) {
        num -= 1
        c++
    }
   
    if (is) {
        return -c
    }
    return c
}

