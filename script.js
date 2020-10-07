// the .etch buttons;
let newCanvas = document.querySelector("#new");
let clearCanvas = document.querySelector("#clear");
// the color buttons

// the frame
let frame = document.querySelector("#frame");
let canvas = document.querySelector("#canvas");
let col; // height;
let row; // width;

// New!
newCanvas.addEventListener("click", () => {
    row = prompt("What is x: ?");
    col = prompt("What is y: ?");
    // be friendlier

    if (row < 30 && col < 30) {
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

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            canvas.appendChild(square);

            square.addEventListener('mousemove', event => {
                square.style.backgroundColor = 'yellow';
            })
        }
    }

    // square could be smaller?
    canvas.style.width = row * 22 + 'px';
    canvas.style.height = col * 22 + 'px';
    //frame.style.width = ((row * 22) * 1.25) + 'px';
    //frame.style.height = ((col * 22) * 1.25) + 100 + 'px';
    // too put buttons in^^
}

function clear() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}