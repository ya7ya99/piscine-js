const isType = {
    array: Array.isArray,
    function: (value) => typeof value === 'function',
    object: (value) => 
        value !== null && 
        typeof value === 'object' && 
        !isType.array(value) && 
        !isType.function(value) && 
        !(value instanceof RegExp)
};

function replica(target, ...sources) {
    sources.forEach(source => {
        for (const [key, value] of Object.entries(source)) {
            if (isType.object(value)) {
                if (!target.hasOwnProperty(key) || !isType.object(target[key])) {
                    target[key] = {};
                }
                replica(target[key], value);
            } else {
                target[key] = value;
            }
        }
    });
    return target;
}