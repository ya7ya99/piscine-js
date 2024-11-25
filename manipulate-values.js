function filterValues(obj,func){
    const result = {}
    for (let key in obj){
        if (func(obj[key])){
            result[key] = obj[key]
        }
    }
    return result;
}

function mapValues(obj,func){
        if (obj == null){
            return {}
        }
        let result = {}
        for (let key in obj){
            result[key] = func(obj[key]);
        }
        return result
}

function reduceValues(obj,func,initialval = 0){
    let res = initialval
    for (let key in obj) {
        res = func(res,obj[key])
    }
    return res
}