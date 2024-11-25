function flat(arr, n = 0) {
    let a = []
    for (let j = 0; j < arr.length; j++) {
        if (Array.isArray(arr[j])) {
            for (let k = 0; k < arr[j].length; k++) {
                a.push(arr[j][k])
            }
        } else {
            a.push(arr[j])
        }
    }
    if (n == 'Infinity'){
        n = 10
    }
    for (let j = 0; j <n-1; j++) {
        a = flat(a)
    }
    return a
}


