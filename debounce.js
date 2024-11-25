function debounce(func , t) {
    let time
    return function(...params) {
        clearTimeout(time)
        time = setTimeout(() => {
            func(params);
        }, t);
    }
}

        


function opDebounce(func, t, options = {}) {
    let time;
    let isWaiting = false;
    return function(...params) {
        const context = this;
        const later = () => {
            time = null;
            isWaiting = false;
            if (!options.leading) {
                func.apply(context, params);
            }
        };
        
        const shouldCallNow = options.leading && !isWaiting;
        
        clearTimeout(time);
        time = setTimeout(later, t);
        
        if (shouldCallNow) {
            isWaiting = true;
            func.apply(context, params);
        }
    };
}