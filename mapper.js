function map(arr, func) {
    let arrf = []
    for (let i = 0; i < arr.length; i++) {
        arrf.push(func(arr[i],i,arr))
    }
    return arrf
}



function flatMap(arr, func) {

    const result = []
    
    for (let i = 0; i < arr.length; i++) {
            const mapp = func(arr[i],i,arr)
                result.push(mapp)
            
    }

    return flat(result)
}


function flat(arr) {
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
    return a
}

