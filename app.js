//import functions
import { didUserWin, getRandomPick } from "./utils.js";

// grab DOM elements from HTML
const button = document.getElementById('button'); 
const computerPickSpan = document.getElementById('computer-pick-span'); 
const resultHolder = document.getElementById('result-holder'); 
const winsSpan = document.getElementById('wins-span');
const lostSpan = document.getElementById('lost-span');
const tiedSpan = document.getElementById('tied-span');
const resultSection = document.getElementById('result-section'); 
const resetButton = document.getElementById('button-reset'); 

// set STATE
let wins = 0; 
let losses = 0; 
let ties = 0; 
// dev note: userChoice will generate with button click
// dev note: computerChoice will generate with button click

// EVENT listener
button.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked'); 
    if (!selected) {
        alert('Tricky tricky! You must select an option before continuing!');
    }  
    resultSection.style.display = 'block';
    const userChoice = selected.value; 
    const computerChoice = getRandomPick(); 
    computerPickSpan.textContent = computerChoice;
    if (didUserWin(userChoice, computerChoice) === 'win') {
        resultHolder.textContent = 'You win!';
        wins++; 
        winsSpan.textContent = wins; 
    } else if (didUserWin(userChoice, computerChoice) === 'tie') {
        resultHolder.textContent = 'You tied!'; 
        ties++; 
        tiedSpan.textContent = ties; 
    } else {
        resultHolder.textContent = 'You lost, sorry! :( '; 
        losses++; 
        lostSpan.textContent = losses;
    }
}); 

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0; 
    ties = 0; 
    computerPickSpan.textContent = '...tbd';
    resultHolder.textContent = ''; 
    winsSpan.textContent = '0'; 
    tiedSpan.textContent = '0';
    lostSpan.textContent = '0';  
});
