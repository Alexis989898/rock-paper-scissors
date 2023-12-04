function getComputerChoice() {
    const choiceN = Math.floor(Math.random() * 3);
    let choice;
    if(choiceN === 0) {
        choice = "rock";
    } else if (choiceN === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function round(playerSelection, computerSelection) {
    let result;
    if(playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "draw";
        } else if(computerSelection == "paper") {
            result = "computer won";
        } else if (computerSelection == "scissors") {
            result = "player won";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "player won";
        } else if(computerSelection == "paper") {
            result = "draw";
        } else if (computerSelection == "scissors") {
            result = "computer won";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "computer won";
        } else if(computerSelection == "paper") {
            result = "player won";
        } else if (computerSelection == "scissors") {
            result = "draw";
        }
    }
    return result;
}

function game() {
    console.log("Best of five: ");
    let pcPoints = 0;
    let playerPoints = 0;

    let i = 1;
    while(i <= 5 && pcPoints != 3 && playerPoints != 3) {
        console.log("");
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + pcPoints);
        console.log("Game " + i);

        const computerSelection = getComputerChoice();
        let playerSelection;

        while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            playerSelection = window.prompt("Choose rock, paper or scissors!");
            if(playerSelection === null) {
                console.log("Game closed. Refresh the page to play again");
                return;
            }
            playerSelection = playerSelection.toLowerCase();
        }

        console.log("You chose " + playerSelection);
        console.log("Computer chose " + computerSelection);

        const result = round(playerSelection, computerSelection);

        console.log(result);
        if(result == "player won") {
            playerPoints++;
            i++;
        } else if (result == "computer won") {
            pcPoints++;
            i++;
        }
    }
}

game();