function get(src, path) {
    const keys = path.split('.')
    let current = src

    for (const key of keys) {
        if (key in current) {
            current = current[key]
        }else {
            return undefined
        }
    }

    return current
}
