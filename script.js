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

    let hSelected = hSelector.toLowerCase();

    const scissors = "scissors"
    const paper = "paper"
    const rock = "rock"

    if (hSelector === "") {
        hSelected = hSelector.toLowerCase();
        console.log(hSelected)

        while (hSelector == "") {
            window.alert("Please type in your choice")
            hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")

        } if (hSelector == scissors) { 
            hChoice = "SS";
        } else if (hSelector == paper) { 
            hChoice = "PP";
        } else if (hSelector == rock) 
            hChoice = "RR"
        
        console.log(hChoice)

    } else {
        if (hSelected == scissors) { 
            hChoice = "scissors";
        } else if (hSelected == paper) {                // else block complete
            hChoice = "paper";
        } else if (hSelected == rock)
            hChoice = "rock"

        console.log(hChoice)
    }
}

/*---------------------------Calling functions-----------------------------------------*/
getHumanChoice()
getComputerChoice()
