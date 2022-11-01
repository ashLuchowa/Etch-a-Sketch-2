//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const sizeBtn = document.querySelector('#size-btn');
const blackBtn = document.querySelector('#black-btn');
const redBtn = document.querySelector('#red-btn');
const eraseBtn = document.querySelector('#erase-btn');
const clearBtn = document.querySelector('#clear-btn');


//-------------- THE GRID --------------//
function grid(cells) {
    canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);
    let squares = canva.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridRow();
    gridColumn(cells);
    clickColorGrid();

}


//-------------- GRID FUNCTIONS --------------//
//generate row
function gridRow(cells) {
    for (let r = 0; r < cells; r++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    }
}
//generate column
function gridColumn(cells) {
    for (let r = 0; r < cells; r++) {
        for (let c = 0; c < cells; c++) {
            const square = document.createElement('div');
            square.classList.add('square-pixel');
            canva.appendChild(square);
        }
    }
}
//mouse color
function gridColor(color) {
    let pixels = document.querySelectorAll('.square-pixel');
    color;

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', () => {
            pixels[i].style.backgroundColor = `${color}`;
        });
    }
}
//click and color
function clickColorGrid() {
    blackBtn.addEventListener('click', () => {
        gridColor('black');
    });
    redBtn.addEventListener('click', () => {
        gridColor('red');
    });
    eraseBtn.addEventListener('click', () => {
        gridColor('');
    });
    clearBtn.addEventListener('click', () => {
        let squares = canva.querySelectorAll('div');
        squares.forEach((div) => div.style.backgroundColor = '');
    });
}


//-------------- SET SIZE --------------//
sizeBtn.addEventListener('click', () => {
    let size = prompt('set a grid size', '1-100');
    size > 0 && size <= 100 ? grid(size) : grid(16);
});


//default size
grid(16);