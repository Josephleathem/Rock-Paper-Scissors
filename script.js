let welcome = "Welcome to the game of Rock Paper Scissors";
document.getElementById("welcome").innerHTML = welcome;

function getComputerChoice() {
    let cSelector = Math.random();
        if (cSelector <= 0.67 && cSelector >= 0.34) {
            cChoice = "paper";
        } else if (cSelector >= 0.68) {
                cChoice = "scissors";
        } else 
            cChoice = "rock";

        return cChoice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    let tiedGames = 0;

    function gameScore() {
        // Disable the game buttons
        const rockButton = document.getElementById("rockButton");
        const paperButton = document.getElementById("paperButton");
        const scissorsButton = document.getElementById("scissorsButton");   
        
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

            if (humanScore === 3) {
                let gameResult = `You won the game ${humanScore} to ${computerScore}, with ${tiedGames} tied rounds!!`
                document.getElementById("gameResult").innerHTML = gameResult;
            } else if (computerScore === 3) {
                let gameResult = `You lost the game ${computerScore} to ${humanScore}, with ${tiedGames} tied rounds!`
                document.getElementById("gameResult").innerHTML = gameResult;
            } 
        }

    function playRound(playerSelection) {
        const computerSelection = getComputerChoice();
      
        let yourSelected = `You chose: ${playerSelection}`;
        document.getElementById("yourSelected").innerHTML = yourSelected;
        let computerSelected = `Computer chose: ${computerSelection}`;
        document.getElementById("computerSelected").innerHTML = computerSelected;
            if (playerSelection == computerSelection) {
                let result = `It's a tie This Round! ${playerSelection} is equal to ${computerSelection}`;
                document.getElementById("result").innerHTML = result
                let roundScore = `The game scores are still:
                    Human: ${humanScore}
                    Computer: ${computerScore}`;
                document.getElementById("roundScore").innerHTML = roundScore
                tiedGames++
            } else {
                if (playerSelection == 'paper' && computerSelection == 'rock') {
                    let result = `You Win This Round! ${playerSelection} beats ${computerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    humanScore++
                } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                    let result = `You Lose This Round! ${computerSelection} beats ${playerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    computerScore++
                } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                    let result = `You Lose This Round! ${computerSelection} beats ${playerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    computerScore++
                } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                    let result = `You Win This Round! ${playerSelection} beats ${computerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    humanScore++
                } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                    let result = `You Win This Round! ${playerSelection} beats ${computerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    humanScore++
                } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                    let result = `You Lose This Round! ${computerSelection} beats ${playerSelection}!`;
                    document.getElementById("result").innerHTML = result
                    computerScore++
                }
                let roundScore = `The new game scores are:
                    Human: ${humanScore}
                    Computer: ${computerScore}`;
                document.getElementById("roundScore").innerHTML = roundScore
                gameCount++
            }
            if (humanScore === 3 || computerScore === 3) {
                gameScore();
            }
    }

      
    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");   
    
    
    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorsButton.addEventListener("click", () => playRound("scissors"));

}

playGame();
