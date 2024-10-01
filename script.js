

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
    square.style.flex = "1";
    square.style.boxSizing = "border-box";
    square.style.borderStyle = "solid";
    square.style.borderWidth = "1px"
    square.style.borderColor = "grey"
    
    column.appendChild(square);

// Here is eventListener for changing the color

    square.addEventListener("mouseover", () => {
        i = 1 / 10;
        r = Math.floor(Math.random() * (255 - 0) ) + 0;
        g = Math.floor(Math.random() * (255 - 0) ) + 0;
        b = Math.floor(Math.random() * (255 - 0) ) + 0;

        square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        currentopacity = square.style.opacity

        

        square.style.opacity = 1;

        if (currentopacity > 0 ) {
            square.style.opacity = Number(currentopacity) + 0.3;
        } else {
            square.style.opacity = 0.1;
        }
        
        console.log(currentopacity)

    })
}
} ;

// If user adds bigger number
input.addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 1) {
        this.value = 50;
        alert("Minimální hodnota je 1")
    }
    if (v > 100) {this.value = 50;
        alert("Maximální hodnota je 100")
    }
  });