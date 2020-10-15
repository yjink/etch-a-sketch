let newCanvas = document.querySelector("#new");
let clearCanvas = document.querySelector("#clear");
let randomButton = document.querySelector('#rand');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let yellow = document.querySelector('#yellow');

let opacity;

let color = 'white';

let canvas = document.querySelector("#canvas");
let row = 0; // height;
let col = 0; // width;

// New!
newCanvas.addEventListener("click", () => {
    row = prompt("What size is this grid? (1-100)");
    col = row;
    if (row <= 100) {
        makeGrid();
    } else {
        alert("The grid is too big! Crashing...")
    }
});

// Clear 
clearCanvas.addEventListener("click", () => {
    clearGrid();
    makeGrid();
})

// make grid
function makeGrid() {
    clearGrid();

    let h = (1/row) * 500;
    let w = h;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.height = h + 'px';
            square.style.width = w + 'px';
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
}

// Taste the rainbow
function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    color = randomColor;
}

randomButton.addEventListener('click', () => {
    canvas.addEventListener('mousemove', () => {
        getRandomColor();
    })
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