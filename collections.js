function arrToSet(arr){
    return new Set(arr)
}

function arrToStr(arr) {
    return arr.join('')
}
function setToArr(s){
    return Array.from(s)
}
function setToStr(s) {
    return Array.from(s).join('')
}
function strToArr(str) {
    return Array.from(str)
}
function strToSet(str) {
    return new Set(str)
}
function mapToObj(m) {
    return Object.fromEntries(m)
}
function objToArr(obj) {
    return Object.values(obj)
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
function arrToObj(arr) {
    return Object.assign({},arr)
}
function strToObj(str) {
    return Object.assign({}, str)
}
function superTypeOf(x){
    if ( x === null ) return 'null';
    if ( typeof x == 'function' ) return 'Function';
    if ( typeof x == 'number' ) return 'Number';
    if ( typeof x == 'string' ) return 'String';
    if ( x instanceof Map ) return 'Map';
    if ( x instanceof Set ) return 'Set';
    if ( Array.isArray(x) ) return 'Array';
    if ( typeof x == 'object' ) return 'Object';
    else return typeof x;
    };
