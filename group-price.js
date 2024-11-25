function groupPrice(str) {
    let arr = []
    const reg = /(\$|(USD))[0-9]+.[0-9]+/g

   const v =  str.match(reg)
   console.log(v)
   const r = /[0-9]+.[0-9]+/g
   let arrf = []

    if (v != null){
        for (let i = 0;i<v.length;i++){
            const n = v[i].match(r)
                const nn = n[0].split('.')
                arr.push(v[i])
                arr.push(nn[0])
                arr.push(nn[1])
                arrf.push(arr)
                arr = []
        }
        return arrf
    }  else {
        return []
    }
   
}

console.log(groupPrice('this, $0.32, is not a match'))
// //console.log(groupPrice('the total is USD19.98'))