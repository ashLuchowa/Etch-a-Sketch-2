//Selectors
const canva = document.querySelector('.main-canva');
let gridSize = 16;


//Create grid
//grid row
for (let r = 0; r < gridSize; r++) {
    const square = document.createElement('div');
    square.classList.add('square-pixel');
    canva.appendChild(square);

    //grid column
    for (let c = 0; c < gridSize; c++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    }
}