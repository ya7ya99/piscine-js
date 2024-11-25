function every(arr, func) {
    for (let element of arr) {
        if (!func(element)) {
            return false;
        }
    }
    return true;
}

function some(arr, func) {
    for (let element of arr) {
        if (func(element)) {
            return true;
        }
    }
    return false;
}

function none(arr, func) {
    for (let element of arr) {
        if (func(element)) {
            return false;
        }
    }
    return true;
}
