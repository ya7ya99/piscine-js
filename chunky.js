function chunk(arr, n) {
    let a = []
    let res = []
    let c = 0
    let c1 = 0
    for (let i = 0; i < arr.length;i++ ) {
        if (c == n){
            res.push(a)
            a = []
            c = 0
        } 
        a.push(arr[i])
        c++
       
    }
    res.push(a)
    return res
}

console.log(chunk(['a', 'b', 'c', 'd'], 3))