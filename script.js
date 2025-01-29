//select the container div
const container = document.querySelector(".container")

//creating grid squares
for(let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div")

    newDiv.style.borderStyle = "solid"
    container.appendChild(newDiv)
}