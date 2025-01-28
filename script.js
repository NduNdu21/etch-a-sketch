//select the container div
const container = document.querySelector(".container")

//creating grid squares
for(let i = 0; i < 16; i++) {
    container.appendChild(document.createElement("div"))
}