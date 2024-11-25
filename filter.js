function filter(arr, func) {
    const arr1 = []
   for (let i = 0; i < arr.length; i++) {
        let is = func(arr[i],i,arr)
        if (is) {
            arr1.push(arr[i])
        }   
   }
   return arr1
}

function reject(arr, func) {
    const arr1 = []
   for (let i = 0; i < arr.length; i++) {
        let is = func(arr[i],i,arr)
        if (!is) {
            arr1.push(arr[i])
        }   
   }
   return arr1
}

function partition(arr, func) {
    const tr = filter(arr, func) 
    const fa = reject(arr, func)
    return [tr,fa]
 }