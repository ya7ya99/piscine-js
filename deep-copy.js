function deepCopy(value) {
    if (Array.isArray(value)) {
        return value.map(deepCopy);
    } else if (isAnObject(value)) {
        return Object.fromEntries(
            Object.entries(value).map(([key, value]) => [key, deepCopy(value)])
        );
    } else {
        return value;
    }
}

function isAnObject(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        !(value instanceof RegExp)
    );
}