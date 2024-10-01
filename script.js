

// First constants for elements with which we work
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const board = document.querySelector("#board");
const controls = document.querySelector("controls");
const column = document.createElement("column");

// Inner board as div element that can be added or deleted

const innerBoard = document.createElement("innerBoard");

board.appendChild(innerBoard);
innerBoard.appendChild(column);

// Action after clicking button
btn.addEventListener("click", () => {

    side = input.value;
    input.value = "";
    squareSum = side * side;

    innerBoard.innerHTML = "";

    board.appendChild(innerBoard);

    innerBoard.style.display = "flex";
    innerBoard.style.flex = "1";

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
    
    innerBoard.appendChild(column);

    for (let i = 0; i < side; i++) {
    
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = "1"
    
    column.appendChild(square);

// Here is eventListener for changing the color

    square.addEventListener("mouseover", () => {
    
        square.style.backgroundColor = "blue";
    })
}
} ;

// If user adds bigger number
input.addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 1) {
        this.value = 1;
        alert("Minimální hodnota je 1")
    }
    if (v > 50) {this.value = 50;
        alert("Maximální hodnota je 100")
    }
  });