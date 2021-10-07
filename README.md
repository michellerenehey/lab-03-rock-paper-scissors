

### RPS 

### HTML
* h1 header 
* p to explain the rules of the game with a list
* input radio buttons: rock, paper, scissors (with images)
* submit button 
* text field: "computer chose R/P/S"
* text field: you win/lose/tie
* text field: you've won X number of times
* text field: you've lost X number of times
* text field: you've tied X number of times

### STATE
* number of wins: 0 
* number of losses: 0 
* user choice (will generate with button click)
* computerChoice (will generate with button click)


### EVENT
* on button click: 
    - set a const variable selected = document.querySelector('input[type=radio:checked'])
    - create a didUserWin function IN SEPARATE FOLDER and link it in with import 
    - set a variable userChoice = selected.value
    - create a computerChoice function IN A SEPARATE FOLDER and link it in with import
    - create a random generator, which generates random game play
    - if (didUserWin(userChoice, computerChoice)) is win, show "you won!"; if it is lose, show "you lost!", if it is tie, show "you tie!"
    - update the wins/loss/ties (++)
    - update the times won, times lost, times tied span


## UTILS FOLDER TO BUILD & TEST
* randomly generated game play: rock, paper, scissors
* didUserWin function (compare userChoice with computerChoice)

