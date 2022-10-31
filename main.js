//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const blackBtn = document.querySelector('button');


//-------------- THE GRID --------------//
//grid column
function gridRow(cells) {
    for (let r = 0; r < cells; r++) {
        const square = document.createElement('div');
        square.classList.add('square-pixel');
        canva.appendChild(square);
        canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);
    }
}

//grid row
function gridColumn(cells) {
    for (let r = 0; r < cells; r++) {
        for (let c = 1; c < cells; c++) {
            const square = document.createElement('div');
            square.classList.add('square-pixel');
            canva.appendChild(square);
        }
    }
}

//default grid size
function grid(cells) {
    gridRow(cells);
    gridColumn(cells);
}
grid(16);



//-------------- SET SIZE BUTTON --------------//
blackBtn.addEventListener('click', () => {
    
});