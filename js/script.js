function computerPlay() {
    let numericalChoice = Math.floor(Math.random() * 3);
    let finalChoice = null;

    switch(numericalChoice) {
        case 0:
            finalChoice = "rock";
            break;
        case 1:
            finalChoice = "paper";
            break;
        case 2:
            finalChoice = "scissors";
            break;
        default:
            break;
    }
    
    return finalChoice;
}

computerPlay();