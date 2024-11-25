function adder(arr,c=0) {
    return arr.reduce((v, v2) => v+v2,c)
}

function sumOrMul(arr, v = 0) {
    return arr.reduce((c, num) => {
        if (num % 2 === 0) {
            return c * num
        } else {
            return c + num
        }
    }, v)
}


function funcExec(funcs, initialValue) {
    return funcs.reduce((c, func) => func(c), initialValue)
}

