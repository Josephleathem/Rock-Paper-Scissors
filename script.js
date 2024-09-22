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

/*-----------------------------------WORKING------------------------------------------*/
function playRound(humanChoice, computerChoice) {
    // let scissors = "scissors"
    // let paper = "paper"
    // let rock = "rock"

    let huChoice = humanChoice.toUpperCase();
    let cuChoice = computerChoice.toUpperCase();

    console.log(`You have chosen: ${huChoice}!`)
    console.log(`The computers choice was: ${cuChoice}!`)

    if (humanChoice == computerChoice) {
        console.log("It's a tie")
    } else {
        // come up with statements for every scenario of wins and losses
        console.log("they are different")
    }

    // if (humanChoice == scissors) {
    //     humanSelector = 3
    // } else if (humanChoice == paper) {
    //     humanSelector = 1
    // } else if (humanChoice == rock) 
    //     humanSelector = 2

    // if (computerChoice == scissors) {
    //     computerSelector = 3
    // } else if (computerChoice == paper) {
    //     computerSelector = 1
    // } else if (computerChoice == rock) 
    //     computerSelector = 2
    


    // console.log(humanSelector)
    // console.log(computerSelector)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
/*---------------------------Calling functions-----------------------------------------*/

playRound(humanSelection, computerSelection)