function multiply(a, b) {
    let mul = 0;
    if (b < 0) {
        b = -b
        for (let i = 0; i < b; i++) {
            mul += a
        }
        return -mul
    }
    for (let i = 0; i < b; i++) {
        mul += a
    }
    return mul
}

function divide(a,b) {
    let c = 0
    let v = 0
    let i = false
    if (a < 0 && b < 0){
        a = -a
        b = -b
    }
    if (a < 0){
        a = -a
        i = true
    }
    if (b < 0) {
        b = -b
        i = true
    }
    while (v+b <= a) {
        v += b
        c++
    }

    if (i) {
        return -c
    }
    return c
}

function modulo(a,b) {
    let v = 0
    let i = false
    if (a < 0 && b < 0){
        a = -a
        b = -b
        i =true
    }
    if (a < 0){
        a = -a
        i = true
    }
    if (b < 0) {
        b = -b
    }
    while (v+b <= a) {
        v += b
    }
    if (i) {
        return -(a-v)
    }
    return a-v
}
