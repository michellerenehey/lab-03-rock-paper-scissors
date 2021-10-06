import { didUserWin, getRandomPick } from "./utils.js";

// grab DOM elements
const button = document.getElementById('button'); 
const computerPickSpan = document.getElementById('computer-pick-span'); 
const resultHolder = document.getElementById('result-holder'); 
const winsSpan = document.getElementById('wins-span');
const lostSpan = document.getElementById('lost-span');
const tiedSpan = document.getElementById('tied-span');

// set STATE
let wins = 0; 
let losses = 0; 
let ties = 0; 
// userChoice will generate with button click
// computerChoice will generate with button click

// EVENT listener
button.addEventListener('click', () => {
  const selected = document.querySelector('input[type=radio]:checked'); 
  const userChoice = selected.value; 
  const computerChoice = getRandomPick(); 
  computerPickSpan.textContent = computerChoice;
  if (didUserWin(userChoice, computerChoice) === 'win') {
    resultHolder.textContent = "You win!";
    wins++; 
    winsSpan.textContent = wins; 
  } else if (didUserWin(userChoice, computerChoice) === 'tie') {
    resultHolder.textContent = "You tied!"; 
    ties++; 
    tiedSpan.textContent = ties; 
  } else {
    resultHolder.textContent = "You lost, sorry! :( "; 
    losses++; 
    lostSpan.textContent = losses;
  }
}); 
