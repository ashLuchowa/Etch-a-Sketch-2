//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const sizeButton = document.querySelector('#size-btn');


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
}
//default size
grid(16);


//-------------- SET SIZE BUTTON --------------//
sizeButton.addEventListener('click', () => {
    grid(32);
})