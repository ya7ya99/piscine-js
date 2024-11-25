function split(str, v) {
    let c = 0
    let res = []

    while (c <= str.length) {
        if (v == '') {
            if (c != str.length) {
                res.push(str[c])
                c++
                continue
            } else {
                break
            }
        }
        let index = str.indexOf(v, c)
        if (index == -1) {
            res.push(str.slice(c))
            break
        }
        res.push(str.slice(c, index))
        c = index + v.length
    }
    return res
}

function join(arr, v) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (v != undefined) {
            if (i != arr.length-1) {
                res += arr[i] + v
            } else {
                res += arr[i]
            }
        } else {
            res += arr[i]
        }
    }
    return res
}

