const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const board = document.querySelector("#board");

// Inner board as div element that can be added or deleted
const innerBoard = document.createElement("div")

const square = document.createElement("div");
square.classList.add("square");

btn.addEventListener("click", () => {
    const squareSide = input.value;
    input.value = "";

});

function generate() {
    squareSum = squareSide * squareSide
    for (let i = 0; i < squareSum; i++) {
        board.appendChild(square)
    }
} 