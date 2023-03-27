let playerSelection = null;
let computerSelection = ranNum ();
let btn = document.querySelectorAll('button');
let playerEl = document.getElementById('player');
let computerEl = document.getElementById('computer');
let outcomeEl = document.getElementById('outcome')
let playerHandImg = document.getElementById("player-hand")
let computerHandImg = document.getElementById("computer-hand")
//button selection
btn.forEach((button) => { 
    button.addEventListener ('click', (event) => {
        playerSelection =event.target.id;
       
        game();
        })
});

//computerSelection:
function ranNum () {
 let randomNumber = Math.floor(Math.random() *3)
randomNumber = 
(randomNumber === 0)  ? "rock" :
(randomNumber === 1) ? "paper" :
 "scissors" ;
 return randomNumber;
}

//game rules:
function gameOutcome () {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        outcomeEl.textContent = "player wins!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            outcomeEl.textContent = "player wins!"
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            outcomeEl.textContent = "player wins!"
        } else if ( playerSelection == "scissors" && computerSelection == "scissors") {
            outcomeEl.textContent = "it's a draw!"
        } else if ( playerSelection == "paper" && computerSelection == "paper") {
            outcomeEl.textContent = "it's a draw!"
        } else if ( playerSelection == "rock" && computerSelection == "rock") {
            outcomeEl.textContent = "it's a draw!"
        } else {
            outcomeEl.textContent = "computer wins!";
        }
    };

//game results:
function game () {
    playerHandImg.src=`images/p-${playerSelection}.png`;  // 3/27 1:58pm: updates player's hand
    computerSelection = ranNum();
    computerHandImg.src=`images/p-${computerSelection}.png`;
    playerEl.textContent = `player:${playerSelection}`;
    computerEl.textContent = `computer: ${computerSelection}`;
    gameOutcome();
}
/* pseudocode process:
game rule:

rock paper scissors

player selection = 3 choices
computer selection = 3 choices --- determined by a random Choice generation 0-2
0 = rock
1 = paper
2 = scissors

game process:

player selects option --> computer choice --> output




rock beats scissors
paper beats rock
scissors beats paper


*/