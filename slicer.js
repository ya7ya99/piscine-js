function slice(arr, min=0, max = arr ? arr.length : 0){
    let arr2 =[]
    if (max<0){
        max = arr.length+max
    }
    if (min<0){
        min = arr.length+min
    }
    for (let i = min; i < max;i++){
        arr2.push(arr[i])
    }
    if (typeof arr == "object") {
        return arr2
    } else {
        return arr2.join('')
    }
}


