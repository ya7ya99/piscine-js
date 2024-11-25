
function build(n) {
    let count = 0
    let set = setInterval(() => {
        if (count < n) {
            count++
            const newDiv = document.createElement("div")
            newDiv.id =  `brick-${count}`;
            if (count % 3 == 2) {
                newDiv.dataset.foundation = 'true'
            }
            newDiv.textContent = count
            document.body.appendChild(newDiv)
        } else {
            clearInterval(set)
        }
    }, 100)
}

function repair(...ids) {
    ids.forEach(id => {
        const brick = document.getElementById(id)
        if (brick) {
            if (brick.dataset.foundation === 'true') {
                brick.dataset.repaired = 'in progress'
            } else {
                brick.dataset.repaired = 'true'
            }
        }
    })
}

function destroy() {
    let bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
}

export { build, repair, destroy }