function game(numberOfRounds) 
{
    let playerSelection;
    let computerSelection;
    let message;
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < numberOfRounds; i++) 
    {
        playerSelection = playerPlay();
        while(!isPlayerSelectionValid(playerSelection))
            playerSelection = playerPlay(false);
        computerSelection = computerPlay();

        roundResults = playRound(playerSelection, computerSelection);
        if(roundResults.score == 1) 
            playerScore++;
        else if(roundResults.score == -1)
            computerScore++;

        message = `ROUND ${i + 1}:\n`;
        message += roundResults.message;
        message += `\n\n Player Score: ${playerScore} Computer Score: ${computerScore}`

        if(roundResults.score == 0)
            i--;

        if(i == numberOfRounds - 1)
        {
            if(playerScore == computerScore)
                message += `\n\n GAME OVER... It's a tie!?`;
            else if(playerScore < computerScore)
                message += `\n\n GAME OVER... You lost...`;
            else if(playerScore > computerScore)
                message += `\n\n GAME OVER... You won!!`
        }

        alert(message);
        console.log(message);

    }
}

function playRound(playerSelection, computerSelection) 
{
    let result = {
        message: `You chose: ${playerSelection}. Computer chose: ${computerSelection}.`,
        score: 0
    }

    if(playerSelection == computerSelection) 
    {
        result.message += `\nIt's a tie... Try again.`;
        result.score = 0;
    }
    else if( (playerSelection == "Rock" && computerSelection == "Scissors") || 
             (playerSelection == "Paper" && computerSelection == "Rock") || 
             (playerSelection == "Scissors" && computerSelection == "Paper") ) 
    {
        result.message += `\nYou Win! ${playerSelection} beats ${computerSelection}.`;
        result.score = 1;
    }
    else 
    {
        result.message += `\nYou Lose! ${computerSelection} beats ${playerSelection}.`
        result.score = -1;
    }

    return result;
}

function playerPlay(isValidEntry = true) 
{
    let playerChoice = isValidEntry ? prompt("Please select your choice: Rock, Paper, or Scissors") : prompt("Invalid Choice. Please select your choice: Rock, Paper, or Scissors");
    playerChoice = playerChoice.toSentenceCase();
    return playerChoice;
}

function isPlayerSelectionValid(playerSelection) 
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

game(5);