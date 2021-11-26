
// computer player randomly returns 'rock', 'paper' or 'scissors'.; 
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
            }
    };
   

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
            // player winning rounds. 
    if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
            return  "Rock Beats Scissors, You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            return "Paper Covers Rock, You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            return "Scissor Cuts Paper, You Win!";

            // computer winning rounds.
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
            compScore++;
            return "Rock Beats Scissors, You Lose!";
            
    } else if (playerSelection == "rock" && computerSelection == "paper") {
            compScore++;
            return "Paper covers rock, You Lose!";
            
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
            compScore++;
            return "Scissor Cuts Paper, You Lose!";
            
    } else {
            // when it's a tie. 
        return "It's A Tie!"
    }
}



const playerInput = "paper";
   
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay(); 

console.log(playRound(playerSelection, computerSelection));
console.log(playerScore, compScore);



