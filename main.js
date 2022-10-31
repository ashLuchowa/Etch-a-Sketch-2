//Selectors
const canva = document.querySelector('.main-canva');

//default grid
let cells = 16;
canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`)

//change grid size


//Create grid cells
//grid row
for (let r = 0; r < cells; r++) {
    const square = document.createElement('div');
    square.classList.add('square-pixel');
    canva.appendChild(square);

    //grid column
    for (let c = 0; c < cells -1; c++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    }
}

//change grid size to 32
gridSize(32);