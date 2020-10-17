// Initializing...

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
let color = 'white';
let canvas = document.querySelector("#canvas");

let row = 0; // height;
let col = 0; // width;

// Make new canvas
newCanvas.addEventListener("click", () => {
    row = prompt("What size is this grid? (1-100)");
    col = row;
    if (row <= 100) {
        makeGrid();
    } else {
        alert("The grid is too big! Crashing...")
    }
});

// Clear the current canvas, keep size
clearCanvas.addEventListener("click", () => {
    clearGrid();
    makeGrid();
})

// Taste the rainbow

function random(min, max) {
    let num = Math.floor(Math.random() * (max - min));
    return num;
}

function randomColor() {
    return 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
}

rand.addEventListener('click', () => {
    color = randomColor();
})



white.addEventListener('click', () => {
    color = 'white';
})

black.addEventListener('click', () => {
    color = 'black';
})

yellow.addEventListener('click', () => {
    color = 'yellow';
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
                square.style.backgroundColor = color;
                square.style.opacity = opacity;
            })
        }   
    }

    canvas.addEventListener('mouseleave', () => {
        opacity = opacity + 0.1;
    })
}

function clearGrid() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    opacity = 0.1;
    color = 'white';
}




makeGrid(16, 16);