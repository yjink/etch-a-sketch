// the .etch buttons;
let newCanvas = document.querySelector("#new");
let clearCanvas = document.querySelector("#clear");
// the color buttons

// the frame
let frame = document.querySelector("#frame");
let canvas = document.querySelector("#canvas");
let row; // height;
let col; // width;

// New!
newCanvas.addEventListener("click", () => {
    row = prompt("How tall is this canvas?: ");
    col = prompt("How side is this canvas?: ");
    // be friendlier

    if (row <= 30 && col <= 30) {
        grid(row, col);
    } else {
        alert("This canvas is too big!");
    }
});

// Clear 
clearCanvas.addEventListener("click", () => {
    clear();
    grid(row, col);
})

// make grid
function grid(row, col) {
    clear();

    
    let h = 300 / row;
    let w = 400 / col;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.height = h + 'px';
            square.style.width = w + 'px';
            // ^ trying to divide canvas into rows and cols;
            canvas.appendChild(square);

            square.addEventListener('mousemove', event => {
                square.style.backgroundColor = 'yellow';
            })
        }
    }
}

function clear() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}