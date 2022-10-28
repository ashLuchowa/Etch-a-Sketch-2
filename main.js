const canva = document.querySelector('.main-canva');
const rows = document.getElementsByClassName('inner-grid');
const cells = document.getElementsByClassName('cell');

//Default Grid
function defaultGrid() {
    gridRow(16);
    gridColumn(16);
}

defaultGrid(gridRow);

//Create Grid Row
function gridRow(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        canva.appendChild(row).className = 'inner-grid';
    };
};

//Create grid Column
function gridColumn(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        };
    };
};

