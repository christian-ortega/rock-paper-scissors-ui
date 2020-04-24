function playRound(playerSelection, computerSelection) {

}

function computerPlay() {
    let numericalChoice = Math.floor(Math.random() * 3);
    let finalChoice = null;

    switch(numericalChoice) {
        case 0:
            finalChoice = "Rock";
            break;
        case 1:
            finalChoice = "Paper";
            break;
        case 2:
            finalChoice = "Scissors";
            break;
        default:
            break;
    }

    return finalChoice;
}

function playerPlay() {
    let playerChoice = prompt("Please select your choice: Rock, Paper, or Scissors");
    playerChoice = playerChoice.toSentenceCase();
    return playerChoice;
}

String.prototype.toSentenceCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}