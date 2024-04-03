let gridContainer = document.querySelector('.grid-container');

//two loops to get rows and columns
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}