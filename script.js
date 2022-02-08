const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

let tieScore = 0;
let playerScore = 0;
let compScore = 0; 

const rock = document.getElementById('#rock');
const paper = document.getElementById('#paper');
const scissors = document.getElementById('#scissors'); 

const results = document.getElementById('results');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');

cScore.innerText = `Computer Score: ${compScore}`;
pScore.innerText = `Player Score: ${playerScore}`;
results.innerText = '';

const playAgainContainer = document.createElement('div');
playAgainContainer.classList.add('playAgainContainer');
body.append(playAgainContainer); 

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('playAgainBtn');
playAgainBtn.innerText = 'Play Again!';

/* Play again button refreshes page, restarts game.  */
playAgainBtn.addEventListener('click', refreshPage);
function refreshPage() {
        window.parent.location = window.parent.location;        
}

/* Get player selection start gameplay.  */
buttons.forEach((button) => {
        button.addEventListener('click', (getSelection) => {
                let playerSelection = getSelection.target.id;
                let computerSelection = computerPlay();
                (playRound(playerSelection, computerSelection));
                isGameOver(playerScore, compScore);
        })
        
})

/* Disable buttons when game is over */
function disableBtns(){
        buttons.forEach((button) => {
                button.setAttribute('disabled' , true);         
        })
}

/* Check for game over. If Game is over: 
disable choice buttons, reveal 'Play Again' button. */
function isGameOver(playerScore, compScore){
        if (playerScore === 5 || compScore === 5) {
               playAgainContainer.append(playAgainBtn);
                disableBtns(); 
                if (playerScore > compScore) {
                        results.innerText = 'GAME OVER! YOU WON!';
                } else if (compScore > playerScore) {
                        results.innerText = 'GAME OVER! THE COMPUTERS ARE TAKING OVER!!';
                } else {
                        results.innerText = `It's a draw!`;
                }
        } return

}

/* Get Computer Selection */
function computerPlay() {
        const number = Math.floor(Math.random() * 3); 
        if (number === 0) {
                return 'rock';
        } else if (number === 1) { 
                return 'paper';
        } else {
                return 'scissors';
        }
}


/* Compare player choice and computer choice. Updates Scores. Checks to see 
if game is over.  */
function playRound(playerSelection, computerSelection) {

                        if (playerSelection === 'rock' && computerSelection === 'paper') {
                                compScore++; 
                                cScore.innerText = `Computer Score: ${compScore}`;
                                isGameOver(playerScore, compScore);
                                return results.innerText = 'Paper Covers Rock. You Lose.'; 
                                                            
                        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                                playerScore++;
                                pScore.innerText = `Player Score: ${playerScore}`;
                                isGameOver(playerScore, compScore);
                                return results.innerText = 'Rock Crushes Scissors. You Win';
                        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                                compScore++;
                                cScore.innerText = `Computer Score: ${compScore}`;
                                 isGameOver(playerScore, compScore);
                                return results.innerText = 'Scissors Cuts Paper. You Lose.';
                        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                                playerScore++;
                                pScore.innerText = `Player Score: ${playerScore}`;
                                 isGameOver(playerScore, compScore);
                                return results.innerText = 'Paper Covers Rock. You Win.'; 
                        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                                compScore++;
                                cScore.innerText = `Computer Score: ${compScore}`;
                               isGameOver(playerScore, compScore);
                                return results.innerText = 'Rock Crushes Scissors. You Lose';
                        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                                playerScore++;
                                pScore.innerText = `Player Score: ${playerScore}`;
                                isGameOver(playerScore, compScore);
                                return 'Scissors Cuts Paper. You Win!';
                        } else { 
                                tieScore++;
                               isGameOver(playerScore, compScore);
                                return results.innerText = "It's A Tie!";
                        }              
}




