//Selectors
const canva = document.querySelector('.main-canva');

//default grid
let gridSize = 16;
canva.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`)
canva.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`)

//Create grid cells
//grid row
for (let r = 0; r < gridSize; r++) {
    const square = document.createElement('div');
    square.classList.add('square-pixel');
    canva.appendChild(square);

    //grid column
    for (let c = 0; c < gridSize -1; c++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    }
}