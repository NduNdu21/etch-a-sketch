//select the container div
const container = document.querySelector(".container")

//calculate how many grid squares
const containerWidth = container.getAttribute("width")

const divWidth = containerWidth / 16

//creating grid squares
for(let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div")

    newDiv.style.borderStyle = "solid"
    newDiv.style.width = divWidth + "px"
    newDiv.style.height = divWidth + "px"

    container.appendChild(newDiv)
}

//hover to change color
const divs = document.querySelectorAll("div")

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "grey"
    })
})