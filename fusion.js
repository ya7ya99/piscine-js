function fusion(...object) {
    let res = {}
    for (const obj of object) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof res[key] !== typeof obj[key]){
                res[key] = obj[key]
            } else if (Array.isArray(obj[key])) {
                res[key] = (res[key] || []).concat(obj[key]);
            } else if (typeof obj[key] === 'string') {
                res[key] = ((res[key] || '') + ' ' + obj[key]);
            } else if (typeof obj[key] === 'number') {
                res[key] = (res[key] || 0) + obj[key];
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                res[key] = fusion(res[key] || {}, obj[key]);
            } else {
                res[key] = obj[key];
            }
        }
    }
    return res
}

//console.log(fusion({ a: "hello", b: [] }, { a: 4 })) // -> { a: 4, b: [] });
 fusion({ h: 'b', j: 'vb' }, { h: 'g', j: 'vb' }, { hj: ['56'], r: ['vb'] }, { hj: ['g'], r: ['v', 'm'] })