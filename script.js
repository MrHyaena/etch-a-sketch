// First constants for elements with which we work
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const board = document.querySelector("#board");
const controls = document.querySelector("controls")
const column = document.createElement("column")

// Inner board as div element that can be added or deleted


// One square and its properties


// Action after clicking button
btn.addEventListener("click", () => {

    side = input.value;
    input.value = "";
    squareSum = side * side;



    for (let i = 0; i < side; i++) {
        generate();
    };
    

});

// Function for generating squares
function generate() {

    const column = document.createElement("div");
    column.style.flexGrow = "1";
    column.style.display = "flex";
    column.style.flexDirection = "column";
    
    board.appendChild(column);

    for (let i = 0; i < side; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = "1"
    
    column.appendChild(square);

    square.addEventListener("mouseover", () => {
    
        square.style.backgroundColor = "blue";
    })
}
} ;

