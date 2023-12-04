let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
    const choiceN = Math.floor(Math.random() * 3);
    let choice;
    if (choiceN === 0) {
        choice = "rock";
    } else if (choiceN === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function resetScore () {
    playerPoints = 0;
    divPlayerScore.textContent = playerPoints;
    computerPoints = 0;
    divComputerScore.textContent = computerPoints;
}

function updateScore(result, playerSelection, computerSelection) {
    if(result == "draw") {
        infoText.textContent = `You and the computer chose ${playerSelection}, it's a draw!`;
    } else if(result == "player won") {
        playerPoints++;
        divPlayerScore.textContent = playerPoints;
        infoText.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}, you won!`;
    } else if(result == "computer won") {
        computerPoints++;
        divComputerScore.textContent = computerPoints;
        infoText.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}, computer won!`;
    }

    if(playerPoints == 5) {
        infoText.textContent += "\r\nGame Over. You win!";
        resetScore();
        return;
    } else if (computerPoints == 5){
        infoText.textContent += "\r\nGame Over. You lose...";
        resetScore();
        return;
    }
}

function round(playerSelection, computerSelection) {
    let result;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "draw";
        } else if (computerSelection == "paper") {
            result = "computer won";
        } else if (computerSelection == "scissors") {
            result = "player won";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "player won";
        } else if (computerSelection == "paper") {
            result = "draw";
        } else if (computerSelection == "scissors") {
            result = "computer won";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "computer won";
        } else if (computerSelection == "paper") {
            result = "player won";
        } else if (computerSelection == "scissors") {
            result = "draw";
        }
    }
    updateScore(result, playerSelection, computerSelection);
    return result;
}

//getting score and info divs
const infoText = document.querySelector("#info-text");
const divPlayerScore = document.querySelector("#score-player");
const divComputerScore = document.querySelector("#score-computer");


//getting user buttons divs
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

rockbtn.addEventListener("click", () => {round("rock", getComputerChoice())});
paperbtn.addEventListener("click", () => {round("paper", getComputerChoice())});
scissorsbtn.addEventListener("click", () => {round("scissors", getComputerChoice())});
