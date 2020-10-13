// the .etch buttons;
let newCanvas = document.querySelector("#new");
let clearCanvas = document.querySelector("#clear");
// the color buttons
let color = 'purple';

function chooseColor(thisId) {
    color = thisId;
}

// the frame
let frame = document.querySelector("#frame");
let canvas = document.querySelector("#canvas");
let row; // height;
let col; // width;

// New!
newCanvas.addEventListener("click", () => {
    grid();
});

// Clear 
clearCanvas.addEventListener("click", () => {
    clear();
    grid();
})

// make grid
function grid() {
    clear();

    let h = Math.floor((320 / 17) * .93);
    let w = Math.floor((550 / 17) * .93);

    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 17; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.height = h + 'px';
            square.style.width = w + 'px';
            canvas.appendChild(square);


            square.addEventListener('mousemove', event => {
                square.style.backgroundColor = color;
            })
        }   
    }
}

function clear() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}