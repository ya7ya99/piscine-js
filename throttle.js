function throttle(func, limit) {
    let tsena = false;
    return (...arg) => {
        if (tsena) return;
        func(...arg);
        tsena = true;
        setTimeout(() => {
            tsena = false;
        }, limit);
    }
}


function opThrottle(func, limit, options = {}) {
    let tsena = false;
    return (...arg) => {
        if (tsena) return;
        if (options.leading) func(...arg)
        tsena = true
        setTimeout(() => {
            if (options.trailing && !options.leading) func(...arg)
            tsena = false
        }, limit)
    }
}


