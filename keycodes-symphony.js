
const colors = [
    "Red", "Green", "Blue", "Yellow", "Cyan",
    "Magenta", "Black", "White", "Orange", "Purple",
    "Brown", "Pink", "Gray", "Lime", "Indigo",
    "Violet", "Gold", "Silver", "Teal", "Navy",
    "Coral", "Khaki", "Lavender", "Salmon", "Turquoise",
    "Peach", "Mint"
];


document.addEventListener("keydown", function (event) {
    compose(event)
})

function compose(event) {
    if (event.key >= 'a' && event.key <= 'z') {
        const index = event.key.charCodeAt(0) - 97
        const color = colors[index]
        const newDiv = document.createElement('div')
        newDiv.classList.add('note')
        newDiv.style.backgroundColor = color
        newDiv.textContent = event.key
        document.body.appendChild(newDiv)
    } else if (event.key === 'Backspace') {
        const notes = document.getElementsByClassName("note")
        if (notes.length > 0) {
            notes[notes.length - 1].remove()
        }
    } else if (event.key === 'Escape') {
        const notes = document.getElementsByClassName("note")
        while (notes.length > 0) {
            notes[0].remove()
        }
    }
}

export { compose }
