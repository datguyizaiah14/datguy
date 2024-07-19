const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');

let currentPlayer ='X';
let gameActive = true;

function checkWinner(){
const winningCombos = [ 
     [0,1,2], [3,4,5], [6,7,8],[0,3,6],
     [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];
  
  for (let combo of winningCombos) {
      const [a,b,c] = combo;
      if (cells[a].textContent && cells [a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent){
          cells[a].style.backgroundColor ='lightgreen';
          cells[b].style.backgroundColor = 'lightgreen';
          cells[c].style.backgroundColor = 'lightgreen';
          gameActive = false;
          return true;
     }
}

if ([...cells].every(cell => cell.textContent  !==  ''))  {
     gameActive = false;
     return true;
}
return false;

}

function handleClick () {
     if  (!gameActive || this.textContent !== '') return;
  
  this.textContent = currentPlayer;
  if (checkWinner()){
    alert(currentPlayer + 'wins!');
          return;
          }
  
       if (currentPlayer === 'X') {
         currentPlayer = 'O';
       } else {
         currentPlayer = 'X';
       }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));


