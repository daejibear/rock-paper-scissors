let playerSelection = null;
let randomNumber = ranNum();
let computerSelection = null;
let playerButtons = document.querySelectorAll("[data-choice")

function ranNum () {
return Math.floor(Math.random() *3)
}

function getComputerChoice () {
computerSelection = 
(randomNumber === 0)  ? "rock" :
(randomNumber === 1) ? "paper" :
 "scissors" ;
}



console.log(computerSelection);


function game() {


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

*/