//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const sizeBtn = document.querySelector('#size-btn');
const blackBtn = document.querySelector('#black-btn');
const redBtn = document.querySelector('#red-btn');

//-------------- THE GRID --------------//
//generate grid
function grid(cells) {
    canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);
    let squares = canva.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    //rows
    for (let r = 0; r < cells; r++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    }
    //columns
    for (let r = 0; r < cells - 1; r++) {
        for (let c = 0; c < cells; c++) {
            const square = document.createElement('div');
            square.classList.add('square-pixel');
            canva.appendChild(square);
        }
    }

    //-------------- COLOR EVENT --------------//
    let pixels = document.querySelectorAll('.square-pixel');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mouseover', () => {
            pixels[i].style.backgroundColor = 'black';
        });
    }
}

//default size
grid(16);





//-------------- BUTTONS --------------//
//set size btn
sizeBtn.addEventListener('click', () => {
    let size = prompt('set a grid size', '1-100');
    size > 0 && size <= 100 ? grid(size) : grid(16);
});