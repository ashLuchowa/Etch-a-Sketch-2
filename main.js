//Selectors
const canva = document.querySelector('.main-canva');
const blackBtn = document.querySelector('button');


//-------------- THE GRID --------------//

//default grid
function defaultGrid(cells) {
    canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);

    //Create grid cells
    //grid row
    for (let r = 0; r < cells; r++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
    
        //grid column
        for (let c = 0; c < cells - 1; c++) {
            const square = document.createElement('div');
            square.classList.add('square-pixel');
            canva.appendChild(square);
        }
    }
}

defaultGrid(10);