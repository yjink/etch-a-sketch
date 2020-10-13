let canvas = document.querySelector('#canvas');
let newCanvas = document.querySelector('#newCanvas');
let clearCanvas = document.querySelector('#clearCanvas');
let row; // height
let col; // width
let color = 'black';

newCanvas.addEventListener("click", () => {
    clearGrid(); 

    row = prompt("How tall is this grid?");
    col = prompt("How wide is this grid?"); 

    makeGrid(row, col);
})

clearCanvas.addEventListener('click', event => {
    clearGrid();
    makeGrid(row, col);
})

function clearGrid() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function makeGrid(row, col) {
    canvas.style.height = (row * 20) + 'px';
    canvas.style.width = (col * 20) + 'px';

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            canvas.appendChild(square);

            square.addEventListener('mousemove', event => {
                square.style.backgroundColor = color;
            })
        }
    }
}