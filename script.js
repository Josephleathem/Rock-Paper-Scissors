/*------------------------------------------COMPLETE-----------------------------------*/
console.log("Welcome to the game")

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

        } if (hSelected == scissors) { 
            hChoice = "scissors";
        } else if (hSelected == paper) { 
            hChoice = "paper";
        } else if (hSelected == rock) 
            hChoice = "rock"
        
        return hChoice

    } else {
        if (hSelected == scissors) {
            hChoice = "scissors";  
        } else if (hSelected == paper) {
            hChoice = "paper";
        } else if (hSelected == rock) 
            hChoice = "rock"

        return hChoice
    }

}

function playRound(humanChoice, computerChoice) {
    let scissors = "scissors"
    let paper = "paper"
    let rock = "rock"

    let huChoice = humanChoice.toUpperCase();
    let cuChoice = computerChoice.toUpperCase();

    console.log(`You have chosen: ${huChoice}!`)
    console.log(`The has chosen: ${cuChoice}!`)

    if (humanChoice == computerChoice) {
        console.log("It's a tie")
    } else {
        if (humanChoice == paper && computerChoice == rock) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
        } else if (humanChoice == paper && computerChoice == scissors) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
        } else if (humanChoice == rock && computerChoice == paper) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
        } else if (humanChoice == rock && computerChoice == scissors) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
        } else if (humanChoice == scissors && computerChoice == paper) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
        } else if (humanChoice == scissors && computerChoice == rock) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
        }
    }

}

/*-----------------------------------WORKING------------------------------------------*/

/*---------------------------Calling functions-----------------------------------------*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)