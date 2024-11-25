
function getAcceleration(obj) {
    if ('f' in obj && 'm' in obj && 'm' != 0) {
        return obj.f / obj.m
    } else if ('Δv' in obj && 'Δt' in obj && 'Δt' != 0) {
        return obj.Δv / obj.Δt
    } else if ('t' in obj && 'd' in obj && 't' != 0) {
        return obj.d / obj.t
    } else {
        return 'impossible'
    }
}