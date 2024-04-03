let gridContainer = document.querySelector('.grid-container');
let numOfSquares = 20;

//two loops to get rows and columns
for (let i = 0; i < numOfSquares; i++){
    for (let j = 0; j < numOfSquares; j++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        //get calculated size
        const squareSize = calcSquareSize()
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        gridContainer.appendChild(square);
        //change color on hover
        square.addEventListener('mouseover', function() {
            square.style.background = 'blue';
        })
    }
}

//dynamically change the square dimension
function calcSquareSize() {
    const containerWidth = gridContainer.clientWidth;
    const squareSize = containerWidth / numOfSquares;
    return squareSize;
}