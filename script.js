let playerSelection = null;
let computerSelection = ranNum ();
let btn = document.querySelectorAll('button');
let playerEl = document.getElementById('player');
let computerEl = document.getElementById('computer');
let outcomeEl = document.getElementById('outcome');
let playerHandImg = document.getElementById("player-hand");
let computerHandImg = document.getElementById("computer-hand");
let playerScoreEl =  document.getElementById('player-score');
let computerScoreEl = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

//player Score Count


//button selection
btn.forEach((button) => { 
    button.addEventListener ('click', (event) => {
        playerSelection =event.target.id;
       
        setTimeout("game()",2000);
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
        outcomeEl.textContent = "player wins!";
     playerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            outcomeEl.textContent = "player wins!";
            playerScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            outcomeEl.textContent = "player wins!";
            playerScore += 1;
        } else if ( playerSelection == "scissors" && computerSelection == "scissors") {
            outcomeEl.textContent = "it's a draw!";
        } else if ( playerSelection == "paper" && computerSelection == "paper") {
            outcomeEl.textContent = "it's a draw!";
        } else if ( playerSelection == "rock" && computerSelection == "rock") {
            outcomeEl.textContent = "it's a draw!";
        } else {
            outcomeEl.textContent = "computer wins!";
          computerScore += 1;
        }
    };


//winner wins after 3 wins
function score () {
    if (playerScore == 3) {
        alert("You win the game!")
        resetScore();
     }else if (computerScore == 3) {
        alert("You lost the game!")
        resetScore();
     }
        console.log(`after${playerScore}`)
    }

//game results:
function game () {
    playerHandImg.src=`images/p-${playerSelection}.png`;  // 3/27 1:58pm: updates player's hand
    computerSelection = ranNum();
    computerHandImg.src=`images/p-${computerSelection}.png`;
    playerEl.textContent = `player:${playerSelection}`;
    computerEl.textContent = `computer: ${computerSelection}`;
    console.log(`before${playerScore}`)
    gameOutcome();
    playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;


setTimeout("score()",500);



}

    //reset scores
    function resetScore () {
        playerScore = 0;
        computerScore = 0;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
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


~~~~~~~~~~~~~~~~~~~~~~~~~
when button is pressed: delay 1second game function ()
animate both hands
*/

