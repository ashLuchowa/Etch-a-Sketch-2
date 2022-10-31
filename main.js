//-------------- SELECTORS --------------//
const canva = document.querySelector('.main-canva');
const blackBtn = document.querySelector('button');

//-------------- THE GRID --------------//
//generate grid
function grid(cells) {
    canva.style.setProperty('grid-template-columns', `repeat(${cells}, 1fr)`);
    canva.style.setProperty('grid-template-rows', `repeat(${cells}, 1fr)`);
    
    for (let r = 0; r < cells; r++) {
        for (let c = 0; c < cells; c++) {
            const square = document.createElement('div');
            square.classList.add('square-pixel');
            canva.appendChild(square);
        }
    }
}
//set default grid
grid(5);

//-------------- SET SIZE BUTTON --------------//
blackBtn.addEventListener('click', () => {
    //find a way to remove last grid before generating a new one
    grid(15);
})


