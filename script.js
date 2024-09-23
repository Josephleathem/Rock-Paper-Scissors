/*------------------------------------------COMPLETE-----------------------------------*/
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
        console.log(`It's a tie because ${huChoice} is equal to ${cuChoice}`)
    } else {
        if (humanChoice == paper && computerChoice == rock) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
            console.log(`Human win = ${win}`)
        } else if (humanChoice == paper && computerChoice == scissors) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
            win = "no"
            console.log(`Human win = ${win}`)
        } else if (humanChoice == rock && computerChoice == paper) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
            win = "no"
            console.log(`Human win = ${win}`)
        } else if (humanChoice == rock && computerChoice == scissors) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
            console.log(`Human win = ${win}`)
        } else if (humanChoice == scissors && computerChoice == paper) {
            console.log(`You Win! ${huChoice} beats ${cuChoice}!`)
            win = 'yes'
            console.log(`Human win = ${win}`)
        } else if (humanChoice == scissors && computerChoice == rock) {
            console.log(`You Lose! ${cuChoice} beats ${huChoice}!`)
            win = "no"
            console.log(`Human win = ${win}`)
        }
    }

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