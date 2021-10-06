// function to pick a random game play 
export function getRandomPick(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

// function to compare user choice with random game play
export function didUserWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie'; 
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win'; 
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win'; 
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win'; 
    } else {
        return 'lose';
    }
}; 