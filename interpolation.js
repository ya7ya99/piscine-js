
function interpolation(obj) {
    let isN = false
    const delay = obj.duration/obj.step
    const add = (obj.end - obj.start) / obj.step
    let  [y ,x] = [delay, obj.start]

    if (obj.start >= obj.end) {
        isN = true
    }

    let time = setInterval(() => {
        obj.callback([x.toFixed(2),y.toFixed(2)])
        x += add
        y += delay
        if (!isN) {
            if (x.toFixed(2) >= obj.end) {
                clearInterval(time)
            }
        }else {
            if (x.toFixed(2) <= obj.end) {
                clearInterval(time)
            }
        }
       

    },delay)

}