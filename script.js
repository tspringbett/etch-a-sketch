const container = document.getElementById('container');
const div = document.querySelectorAll('div');
const button = document.getElementById('reset');
let size = 16;

// creates 16x16 grid on window load
createGrid(size);

// user selects grid size
document.getElementById("reset").addEventListener('click', reloadGrid);

// grid is created
function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.addEventListener('mouseover', draw)
    container.appendChild(div);   
    }
};
// drawing on the pad
function draw(e){
    e.target.style.backgroundColor = 'black';
};

// clears the container
function clearGrid() {
    container.innerHTML = '';
}

// reloads grid when reset is pressed
function reloadGrid() {
    clearGrid()
    gridSize()
    createGrid(size)
}

// selects new grid size
function gridSize() {
    size = prompt('Select a new grid size (max size 100)')
    if (size > 100) {
        size = prompt("Please select a number lower than 100") 
    } if (size < 0) {
        size = prompt("Please select a number great than 0")
    }
};






