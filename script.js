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

        console.log(cChoice)
}
/*------------------------------------------------------------------------------------*/
function getHumanChoice() {
    let hSelector = window.prompt("Do you want to play with Rock, Paper, or Scissors?")
    const scissors = "scissors"
    const paper = "paper"
    const rock = "rock"

    if (hSelector === "") {   /*Create a for loop to iterate as many times as needed for this if statement */
        window.alert("Please type in your choice")
        hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
        if (hSelector == scissors) { 
            hChoice = "scissors";
        } else if (hSelector == paper) { 
                hChoice = "paper";
        } else 
            hChoice = "rock"

        console.log(hChoice)

    } else {
        if (hSelector == scissors) { 
            hChoice = "scissors";
        } else if (hSelector == paper) { 
                hChoice = "paper";
        } else 
            hChoice = "rock"

        console.log(hChoice)
    }
}

/*---------------------------Calling functions-----------------------------------------*/
getHumanChoice()
getComputerChoice()
