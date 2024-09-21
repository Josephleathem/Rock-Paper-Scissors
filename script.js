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

function getHumanChoice() {
    let hSelector = window.prompt("Do you want to play with Rock, Paper, or Scissors?")
    if (hSelector === "") {              /*Create a for loop to iterate as many times as needed for this if statement */
        window.alert("Please type in your choice")
        hSelector = window.prompt("Choose either Rock, Paper, or Scissors?")
    } else if () { /*Test is scissors*/
    
    } else if () { /*Test is paper*/
    
    } else () { /*Test is rock*/
    
    }


    console.log(hSelector)
}

// create function to keep track of score


getHumanChoice()
getComputerChoice()
