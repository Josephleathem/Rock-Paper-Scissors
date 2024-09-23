/*------------------------------------------COMPLETE-----------------------------------*/
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
    console.log(" ")

    if (humanChoice == computerChoice) {
        console.log(`It's a tie this round! ${huChoice} is equal to ${cuChoice}`)
        win = 'no-one'
    } else {
        if (humanChoice == paper && computerChoice == rock) {
            console.log(`You Win this round! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
        } else if (humanChoice == paper && computerChoice == scissors) {
            console.log(`You Lose this round! ${cuChoice} beats ${huChoice}!`)
            win = "no"
        } else if (humanChoice == rock && computerChoice == paper) {
            console.log(`You Lose this round! ${cuChoice} beats ${huChoice}!`)
            win = "no"
        } else if (humanChoice == rock && computerChoice == scissors) {
            console.log(`You Win this round! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
        } else if (humanChoice == scissors && computerChoice == paper) {
            console.log(`You Win this round! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
        } else if (humanChoice == scissors && computerChoice == rock) {
            console.log(`You Lose this round! ${cuChoice} beats ${huChoice}!`)
            win = "no"
        }
    }

    let humanScore = 0
    let computerScore = 0 

    if (win == 'yes'){
        humanScore++
    } else if (win == "no"){
        computerScore++
    } else if (win == 'no-one'){
        return null
    }


    console.log(" ")
    console.log(`The new game scores are:
        Human: ${humanScore}
        Computer: ${computerScore}`)
}

/*-----------------------------------WORKING------------------------------------------*/
// Increment the humanScore or computerScore variable based on the round winner. 
    // create variables humanScore and computerScore
    // initialize them at 0
    //     create a loop to Increment the winners counter



/*------------------------------------------------------------------------------------*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)