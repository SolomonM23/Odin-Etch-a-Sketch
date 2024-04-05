let gridContainer = document.querySelector('.grid-container');
let resetBtn = document.querySelector('.btn');

let numOfSquares = 16;
createGrid(numOfSquares);

//two loops to get rows and columns
function createGrid(number){
    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
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
}

//dynamically change the square dimension
function calcSquareSize() {
    const containerWidth = gridContainer.clientWidth;
    return containerWidth / numOfSquares;
}

//clear grid and make new one
resetBtn.addEventListener('click', function(){
    gridContainer.innerHTML = '';
    let userChoice = prompt('pick a number');
    
    while (userChoice > 64 || isNaN(userChoice)){
        userChoice = prompt('pick a number less than or equal to 64.');
    }
    
    numOfSquares = parseInt(userChoice); // Update the variable
    createGrid(numOfSquares);   
});