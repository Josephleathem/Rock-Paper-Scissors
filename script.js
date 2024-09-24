console.log(" ")
console.log("Welcome to the game of Rock Paper Scissors")
console.log(" ")

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

function getHumanChoice() {
    let hSelector = window.prompt("Do you want to play with Rock, Paper, or Scissors?")

    let hSelected = hSelector.toLowerCase();

    let scissors = "scissors"
    let paper = "paper"
    let rock = "rock"

    if (hSelector === "") {
         while (hSelector == "") {
            window.alert("Please type in your choice")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
            hSelected = hSelector.toLowerCase();

        } if (hSelected != scissors && hSelected != rock && hSelected != paper) {
            window.alert("Please check your spelling")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
            hSelected = hSelector.toLowerCase();
        } else if (hSelected == null) {
            window.alert("Please type in your choice")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
            hSelected = hSelector.toLowerCase();
        } else if (hSelected == scissors) { 
            hChoice = "scissors";
        } else if (hSelected == paper) { 
            hChoice = "paper";
        } else if (hSelected == rock) 
            hChoice = "rock"
        
        return hChoice

    } else {
        if (hSelected != scissors && hSelected != rock && hSelected != paper) {
            window.alert("Please check your spelling")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
            hSelected = hSelector.toLowerCase();
        } else if (hSelected == null) {
            window.alert("Please type in your choice")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
            hSelected = hSelector.toLowerCase();
        } else if (hSelected == scissors) {
            hChoice = "scissors";  
        } else if (hSelected == paper) {
            hChoice = "paper";
        } else if (hSelected == rock) 
            hChoice = "rock"

        return hChoice
    }

}

function playGame() {

    let humanScore = 0
    let computerScore = 0 

    function playRound(humanChoice, computerChoice) {
        let scissors = "scissors"
        let paper = "paper"
        let rock = "rock"
    
        let huChoice = humanChoice.toUpperCase();
        let cuChoice = computerChoice.toUpperCase();
    
        console.log(`You have chosen: ${huChoice}!`)
        console.log(`The computer has chosen: ${cuChoice}!`)
        console.log(" ")

    
        if (humanChoice == computerChoice) {
            console.log(`It's a tie! ${huChoice} is equal to ${cuChoice}`)
            console.log(" ")
            console.log(`The game scores are still:
                Human: ${humanScore}
                Computer: ${computerScore}`)
        } else {
            if (humanChoice == paper && computerChoice == rock) {
                console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
                humanScore++
            } else if (humanChoice == paper && computerChoice == scissors) {
                console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
                computerScore++
            } else if (humanChoice == rock && computerChoice == paper) {
                console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
                computerScore++
            } else if (humanChoice == rock && computerChoice == scissors) {
                console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
                humanScore++
            } else if (humanChoice == scissors && computerChoice == paper) {
                console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
                humanScore++
            } else if (humanChoice == scissors && computerChoice == rock) {
                console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
                computerScore++
            }
            console.log(" ")
            console.log(`The new game scores are:
                Human: ${humanScore}
                Computer: ${computerScore}`)
        }
    
    }

    var gameCount = 0 

    do {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameCount++;

        console.log(" ")

        tiedGames = (3 - (humanScore + computerScore))

        if (gameCount == 3 && humanScore > computerScore) {
            console.log(`You won the game ${humanScore} to ${computerScore}, with ${tiedGames} tied rounds!!`)
        } else if (gameCount == 3 && computerScore > humanScore) {
            console.log(`You lost the game ${computerScore} to ${humanScore}, with ${tiedGames} tied rounds!`)
        } else if (gameCount == 3 && computerScore == humanScore) {
            console.log(`It was a tied game ${computerScore} to ${humanScore}, with ${tiedGames} tied rounds!`)
        }
    } while (gameCount < 3)
        
}
playGame()