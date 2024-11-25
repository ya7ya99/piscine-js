function generateLetters() {
    let count = 11
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < 120; i++) {
        const newDiv = document.createElement('div')
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        newDiv.textContent = letter
        newDiv.style.fontSize = `${count}px`
        count++
        
        if (i < 40) {
            newDiv.style.fontWeight = `${300}`
        } else if (i >= 80) {
            newDiv.style.fontWeight = `${600}`
        } else {
            newDiv.style.fontWeight = `${400}`
        }
        document.body.appendChild(newDiv)
    }
}

export { generateLetters }

