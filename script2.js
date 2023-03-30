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
playerHandImg.src=`images/p-rock.png`; // this keeps it so when We press the button, it goes back to rock (starting position)
playerHandImg.animate ([{ transform: 'translateY(0px)' },
{ transform: 'translateY(-7px)'},
{ transform: 'translateY(0px)' }, 
{ transform: 'translateY(-7px)' },
{ transform: 'translateY(0px)' }, 
{ transform: 'translateY(-7px)' },
{ transform: 'translateY(0px)' }
], {
// sync options
duration: 7777, // should match the setTimeout("game()") -- to reveal the results
iterations: 10000 //this repeats the animation 1 time only.
});

// code for computer hand shake
computerHandImg.src=`images/p-rock.png`; // this keeps it so when We press the button, it goes back to rock (starting position)
computerHandImg.animate ([{ transform: 'translateY(0px) scaleX(-1)' },
{ transform: 'translateY(7px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }, 
{ transform: 'translateY(7px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }, 
{ transform: 'translateY(7px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }
], {
// sync options
duration: 7777, // should match the setTimeout("game()") -- to reveal the results
iterations: 10000 //this repeats the animation 1 time only.
});




//button selection
btn.forEach((button) => { 
    button.addEventListener ('click', (event) => {

//code for player hand shake - 3/28 - Researched code for javascript transformation properties ---
        playerHandImg.src=`images/p-rock.png`; // this keeps it so when We press the button, it goes back to rock (starting position)
        playerHandImg.animate ([{ transform: 'translateY(0px)' },
  { transform: 'translateY(-70px)'},
  { transform: 'translateY(0px)' }, 
  { transform: 'translateY(-70px)' },
  { transform: 'translateY(0px)' }, 
  { transform: 'translateY(-70px)' },
  { transform: 'translateY(0px)' }
], {
  // sync options
  duration: 1500, // should match the setTimeout("game()") -- to reveal the results
  iterations: 1 //this repeats the animation 1 time only.
});

// code for computer hand shake
computerHandImg.src=`images/p-rock.png`; // this keeps it so when We press the button, it goes back to rock (starting position)
computerHandImg.animate ([{ transform: 'translateY(0px) scaleX(-1)' },
{ transform: 'translateY(-70px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }, 
{ transform: 'translateY(-70px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }, 
{ transform: 'translateY(-70px) scaleX(-1)' },
{ transform: 'translateY(0px) scaleX(-1)' }
], {
    // sync options
    duration: 1500, // should match the setTimeout("game()") -- to reveal the results
    iterations: 1 //this repeats the animation 1 time only.
  });



// ***To remove repetition, we will make a function for handshake and use the variable: player/computer.




playerSelection = event.target.id; // this will be what the player picked, output will be "rock", "paper" or "scissors"
       
        setTimeout("game()",1500);
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
        outcomeEl.textContent = "You win!";
     playerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            outcomeEl.textContent = "You win!";
            playerScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            outcomeEl.textContent = "You win!";
            playerScore += 1;
        } else if ( playerSelection == "scissors" && computerSelection == "scissors") {
            outcomeEl.textContent = "It's a draw!";
        } else if ( playerSelection == "paper" && computerSelection == "paper") {
            outcomeEl.textContent = "It's a draw!";
        } else if ( playerSelection == "rock" && computerSelection == "rock") {
            outcomeEl.textContent = "It's a draw!";
        } else {
            outcomeEl.textContent = "Computer wins!";
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
    // - this is player output: playerEl.textContent = `player:${playerSelection}`;
    //- this is computer output: computerEl.textContent = `computer: ${computerSelection}`;
    console.log(`before${playerScore}`)
    gameOutcome();
    playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;


setTimeout("score()",10);



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

3-29:
display "pop up div" which resets the game after the game ends (3 rounds)

*/
