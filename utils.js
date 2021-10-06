export function getRandomPick(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

export function didUserWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie'; 
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win'; 
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'lose'; 
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win'; 
    } else {
        return 'lose';
    }
}; 