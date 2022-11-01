//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const sizeBtn = document.querySelector('#size-btn');
const blackBtn = document.querySelector('#black-btn');
const redBtn = document.querySelector('#red-btn');


//-------------- THE GRID --------------//
function grid(cells) {
    canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);
    let squares = canva.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridRow();
    gridColumn(cells);
    gridColor();
}
//default size
grid(16);


//-------------- FUNCTIONS --------------//
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
//grid coloring
function gridColor() {
    let pixels = document.querySelectorAll('.square-pixel');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', () => {
            pixels[i].style.backgroundColor = 'black';
        });
    }
}


//-------------- BUTTONS --------------//
//set size btn
sizeBtn.addEventListener('click', () => {
    let size = prompt('set a grid size', '1-100');
    size > 0 && size <= 100 ? grid(size) : grid(16);
});