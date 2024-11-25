function triangle(s, n){
    let res = ''
    for (let i = 0;i<n;i++){
        for (let j = 0;j<=i;j++){
            res += s
        }
        if (i != n-1) {
             res += '\n'
        }
    }
    return res
}

 //console.log(triangle('^',5))