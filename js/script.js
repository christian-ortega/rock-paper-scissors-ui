const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection;
        if(button.id == "rock") playerSelection = "Rock";
        if(button.id == "paper") playerSelection = "Paper";
        if(button.id == "scissors") playerSelection = "Scissors";
        game(1, playerSelection);
    });
});

function game(numberOfRounds, playerSelection) 
{
    let computerSelection;
    let message;
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < numberOfRounds; i++) 
    {
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