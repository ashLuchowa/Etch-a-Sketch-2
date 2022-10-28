const canva = document.querySelector('.main-canva');
const rows = document.getElementsByClassName('inner-grid');

//Default Grid
function defaultGrid(x, y) {
    gridRow(x);
    gridColumn(y);
}
defaultGrid(10, 10);

//Create Grid Row
function gridRow(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        canva.appendChild(row).className = 'inner-grid';
    }
}

//Create grid Column
function gridColumn(cellNum) {
}