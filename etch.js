let canvas = document.querySelector('#canvas');
let newCanvas = document.querySelector('#newCanvas');
let clearCanvas = document.querySelector('#clearCanvas');
let penColor = document.querySelector('#penColor');
let row; // height
let col; // width
let randomColor = 'yellow';
let opacity;

newCanvas.addEventListener("click", () => {
    clearGrid(); 

    row = prompt("How tall is this grid?");
    col = prompt("How wide is this grid?"); 

    if (row <= 100 && col <= 100) {
        makeGrid(row, col);
    } else {
        alert("This grid is too big!");
    }
})

clearCanvas.addEventListener('click', event => {
    clearGrid();
    makeGrid(row, col);
})

function clearGrid() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    opacity = 0.1;
}

function makeGrid(row, col) {
    canvas.style.height = (row * 20) + 'px';
    canvas.style.width = (col * 20) + 'px';

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            canvas.appendChild(square);

            square.addEventListener('mouseenter', event => {
                square.style.backgroundColor = randomColor;
                square.style.opacity = opacity;
            })
        }
    }

    canvas.addEventListener('mouseleave', () => {
        opacity = opacity + 0.1
    })

}

function getColor() {
    randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

penColor.addEventListener('click', () => {
    canvas.addEventListener('mousemove', event => {
        getColor();
    })
})