document.addEventListener("click", function (event) {
    createCircle(event)
})

function createCircle(event) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv')


    newDiv.style.left = `${event.clientX}px`;
    newDiv.style.top = `${event.clientY}px`;

    document.body.appendChild(newDiv);

}


function moveCircle() {

}

function setBox() {
    const box = document.createElement("div")
    box.classList.add("box");
  
    document.body.appendChild(box)

}

export { createCircle, moveCircle, setBox }