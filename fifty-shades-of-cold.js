import { colors } from "./fifty-shades-of-cold.data.js"
function generateClasses(){

    const style = document.createElement('style')
    colors.forEach(color => {
        style.innerHTML += `.${color}{background: ${color};}`
    });
    document.head.appendChild(style)
}
const Colorss = /(aqua|blue|turquoise|green|cyan|navy|purple)/
function generateColdShades(){
    colors.forEach(color => {
        if (color.match(Colorss) !== null){
            const newDiv = document.createElement('div')
            newDiv.classList.add(color)
            newDiv.innerHTML = color
            document.body.appendChild(newDiv)
        }
    })
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade
    })
}


export {generateClasses, generateColdShades, choseShade}