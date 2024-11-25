function filterKeys(obj, func) {
    const result = {}
    for (let key in obj) {
        if (func(key)) {
            result[key] = obj[key]
        }
    }
    return result;
}

function mapKeys(obj, func) {
    if (obj == null) {
        return {}
    }
    let result = {}
    for (let key in obj) {
        const v = obj[key]
        key = func(key);
        result[key] = v
    }
    return result
}

function reduceKeys(obj, func, x='') {
    let res = x
    for (let key in obj) {
        if (res === ''){
            res = key
        } else {
            res = func(res,key)
        }
    }
    return res
}

const  cart = {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
  }

console.log(reduceKeys(cart, (acc, cr) => `${acc}${cr}:`, ':')
)
// output: carbohydrates, protein, fat