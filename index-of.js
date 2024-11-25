function indexOf(arr, value, ind=0){
    
    for (let i = ind; i < arr.length;i++){
        if (arr[i] == value){
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value, ind=arr.length){
    
    for (let i = ind; i >= 0;i--){
        if (arr[i] == value){
            return i
        }
    }
    return -1
}
function includes(arr, value, ind=0){
    
    for (let i = ind; i < arr.length;i++){
        if (arr[i] == value){
            return true
        }
    }
    return false
}
console.log(lastIndexOf([0, 0, 't', 't'], 't', 3))
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))

