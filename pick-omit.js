function pick(obj,arr) {
    let res = {}
    const array = Array.isArray(arr) ? arr : [arr]
    for (const el of array) {
        if (el in obj){
            res[el] = obj[el]
        }
        
    }
    return res
}


function omit(obj, keys) {
    const keyArray = Array.isArray(keys) ? keys : [keys];
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keyArray.includes(key))
    );
  }

