//select the container div
const container = document.querySelector(".container")

//prompt to get grid size
const button = document.querySelector("button")
let size

button.addEventListener("click", () => {
    //clear grid
    container.innerHTML = ""
    
    size = prompt("Choose your grid size:\nEnter a number of squares.\n\nNote: The max limit is 100")

    //calculate how many grid squares
    const containerWidth = 960

    const divWidth = containerWidth / size

    //creating grid squares
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div")

        newDiv.style.width = divWidth + "px"
        newDiv.style.height = divWidth + "px"

        container.appendChild(newDiv)
    }

    //hover to change color
    const divs = container.querySelectorAll("div")

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "grey"
        })
    })
})

