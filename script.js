// Wheel buttons
let newCanvas = document.querySelector("#new");
let clearCanvas = document.querySelector("#clear");

// Color buttons
let rand = document.querySelector('#rand');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let yellow = document.querySelector('#yellow');

// Variables
let opacity;
let brush = 'white';
let canvas = document.querySelector("#canvas");

let row = 16; // height;
let col = 16; // width;

// Button to make new canvas
newCanvas.addEventListener("click", () => {
    row = prompt("What size is this grid? (1-100)");
    col = row;
    if (row <= 100) {
        makeGrid();
    } else {
        alert("The grid is too big! Crashing...")
    }
});

// Button to clear the current canvas, keep size
clearCanvas.addEventListener("click", () => {
    clearGrid();
    makeGrid();
})

// Brush colors
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
}
white.addEventListener('click', () => {
    brush = 'white';
})
black.addEventListener('click', () => {
    brush = 'black';
})
yellow.addEventListener('click', () => {
    brush = 'yellow';
})
rand.addEventListener('click', () => {
    brush = 'rand';
})

// Make grid
function makeGrid() {
    clearGrid();

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            
            canvas.style.setProperty('--grid-rows', row);
            canvas.style.setProperty('--grid-cols', col);

            canvas.appendChild(square);

            square.addEventListener('mousemove', event => {
                square.style.opacity = opacity;

                if (brush == 'black') {
                    square.style.backgroundColor = 'black';
                } else if (brush == 'white') {
                    square.style.backgroundColor = 'white';
                } else if (brush == 'yellow') {
                    square.style.backgroundColor = 'yellow';
                } else if (brush == 'rand') {
                    square.style.backgroundColor = getRandomColor();
                }
            })
        }   
    }

    canvas.addEventListener('mouseleave', () => {
        opacity = opacity + 0.1;
    })
}

// Clear Grid
function clearGrid() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    opacity = 0.1;
    color = 'white';
}

makeGrid();
