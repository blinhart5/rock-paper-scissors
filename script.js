const computerSelection = computerPlay(); 
const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
let tieScore = 0;
let playerScore = 0;
let compScore = 0; 

function computerPlay() {
        const number = Math.floor(Math.random() *3); 
        if (number === 0) {
                return 'rock';
        } else if (number === 1) { 
                return 'paper';
        } else {
                return 'scissors';
        }
}
 
 function playRound(playerSelection, computerSelection) {
                        if (playerSelection === 'rock' && computerSelection === 'paper') {
                                 compScore++;
                                 return 'Paper Covers Rock. You Lose.'; 
                        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                                playerScore++;
                                return 'Rock crushes Scissors. You Win';
                        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                                compScore++;
                                return 'Scissors cuts paper. You Lose.';
                        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                                playerScore++;
                                return 'Paper Covers Rock. You win.'; 
                        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                                compScore++;
                                return 'Rock crushes scissors. You Lose';
                        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                                playerScore++;
                                return 'Scissors cuts paper. You win!';
                        } else { 
                                tieScore++;
                                return "It's a tie!";
                        }
                        
                }
console.log(playRound(playerSelection, computerSelection));

