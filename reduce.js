function  fold(arr,func,c) {
    let res = c
    for (let i = 0; i < arr.length; i++) {
        res = func(res, arr[i])
    }
    return res
}

function foldRight(arr,func,c) {
    let res = c
    for (let i = arr.length-1; i >= 0; i--) {
        res = func(res, arr[i])
    }
    return res
}

function reduce(array, fnuc) {
    if (array.length < 1) {
        throw new Error("Error")
    }
    let acc = array[0]
    for (let i = 1; i < array.length; i++) {
        acc = fnuc(acc, array[i])
    }
    return acc;
}
function reduceRight(array, fnuc) {
    if (array.length < 1) {
        throw new Error("Error")
    }
    let acc = array[array.length-1]
    for (let i = array.length-2; i >=0; i--) {
        console.log(array[i])
        acc = fnuc(acc, array[i])
    }
    return acc;
}

// const adder = (a, b) => a + b
// console.log(reduceRight([3, 10, 26, 0], adder)) //39


// try {
//     reduce([3, 10, 26, 0], fold())
//   } catch (e) {
//     console.error(e)
//   }