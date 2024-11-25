function pyramid(s, n){
    let res = ''
    let c = n-1
    let spaces = s.length * n - s.length
    for (let i = 0;i<n;i++){
        res+= " ".repeat(spaces-i*s.length)
        for (let j = 0;j<n+i;j++){
            if (j == c){
                res += s
                c--
            } else if (j>c) {
                res += s
            } 
            
        }
        if (i != n-1) {
             res += '\n'
        }
    }
    return res
}


//  console.log(pyramid('*', 12))