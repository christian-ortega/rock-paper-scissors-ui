function game(numberOfRounds) 
{
    let playerSelection;
    let computerSelection;
    
    for(let i = 0; i < numberOfRounds; i++) 
    {
        playerSelection = playerPlay();
        while(!verifyPlayerSelection(playerSelection))
            playerSelection = playerPlay(false);
        computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));

    }
}

function playRound(playerSelection, computerSelection) 
{
    let result = `You chose: ${playerSelection}. Computer chose: ${computerSelection}.`;

    if(playerSelection == computerSelection) 
    {
        result += `\nIt's a tie...`;
    }
    else if( (playerSelection == "Rock" && computerSelection == "Scissors") || 
             (playerSelection == "Paper" && computerSelection == "Rock") || 
             (playerSelection == "Scissors" && computerSelection == "Paper") ) 
    {
        result += `\nYou Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else 
    {
        result += `\nYou Lose! ${computerSelection} beats ${playerSelection}.`
    }

    return result;
}

function playerPlay(isValidEntry = true) 
{
    let playerChoice = isValidEntry ? prompt("Please select your choice: Rock, Paper, or Scissors") : prompt("Invalid Choice. Please select your choice: Rock, Paper, or Scissors");
    playerChoice = playerChoice.toSentenceCase();
    return playerChoice;
}

function verifyPlayerSelection(playerSelection) 
{
    if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")
        return true;
    //else
    return false;
}

function computerPlay()
{
    let numericalChoice = Math.floor(Math.random() * 3);
    let finalChoice = null;

    switch(numericalChoice)
    {
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

String.prototype.toSentenceCase = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

game(1);