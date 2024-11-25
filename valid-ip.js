function findIP(str) {
    const rge = /[0-9]+(\.[0-9]{1,3}){3}(:[0-9]{1,5})?/gk
    const arr = str.match(rge)
    if (arr != null){
        let af = []
        let is = false
        for (let i = 0;i<arr.length;i++){
            let a = arr[i].split(':')
            if (a.length > 1) {
                if (a[1] > 9999){
                    continue
                }else {
                    is = true
                }
            } else {
                is = true
            }
            if (is) {
                let a2 = a[0].split('.')
            let s = false
            for (let j = 0;j<a2.length;j++){
                
                let nstr = a2[j].toString()
                if (nstr.length > 1){
                    if (nstr[0] == '0' ){
                        s = true
                        break
                    } 
                }
                if (a2[j]> 255 ){
                    s = true
                    break
                } 
            }
            if (!s){
                af.push(arr[i])
            }
            }
            is = false
        }
        return af
    }
  
    return []
}
