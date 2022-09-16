/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'shoot';
let gameOutcome = '';
let userThrow = '';
let opponentThrow = '';
//scoreboard
let opponentScore = 2;
let drawScore = 6;
let playerScore = 14;

const throwOptions = ['rock', 'paper', 'scissors'];
/* Actions */
function loadPage() {
    updateDisplay();
    updateScoreboard();
}

/* Components */

function throwGesture(gesture) {
    // console.log('throw:' + gesture);
    gameState = 'results';
    opponentThrow = getRandomItem(throwOptions);
    userThrow = gesture;
    if (opponentThrow === gesture) {
        gameOutcome = 'draw';
    }
    if (opponentThrow === 'rock' && userThrow === 'paper') {
        gameOutcome = 'win';
    }
    if (opponentThrow === 'paper' && userThrow === 'scissors') {
        gameOutcome = 'win';
    }
    if (opponentThrow === 'scissors' && userThrow === 'rock') {
        gameOutcome = 'win';
    }
    if (opponentThrow === 'paper' && userThrow === 'rock') {
        gameOutcome = 'lose';
    }
    if (opponentThrow === 'scissors' && userThrow === 'paper') {
        gameOutcome = 'lose';
    }
    if (opponentThrow === 'rock' && userThrow === 'scissors') {
        gameOutcome = 'lose';
    }
    // update display
    updateDisplay();
    // updateScoreboard();
}

function playAgain() {
    gameState = 'shoot';
    gameOutcome = '';
    userThrow = '';
    opponentThrow = '';
    updateDisplay();
}

/* Component */
// get DOM
const opponentThrowImg = document.getElementById('opponent-gesture');
const displayOutcome = document.getElementById('display-outcome');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const playAgainButton = document.getElementById('play-again-button');
//scoreboard
const opponentScoreDisplay = document.getElementById('opponent-score-display');
const drawScoreDisplay = document.getElementById('draw-score-display');
const playerScoreDisplay = document.getElementById('player-score-display');

// display
function updateDisplay() {
    switch (gameState) {
        case 'shoot':
            opponentThrowImg.src = './assets/ready.png';
            opponentThrowImg.classList.remove('winner');
            rockButton.classList.remove('selected', 'winner');
            paperButton.classList.remove('selected', 'winner');
            scissorsButton.classList.remove('selected', 'winner');
            displayOutcome.textContent = 'Shoot!';
            playAgainButton.classList.add('hidden');
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;

            break;
        case 'results':
            //display opponent throw
            opponentThrowImg.src = './assets/' + opponentThrow + '.png';
            if (gameOutcome === 'lose') {
                opponentThrowImg.classList.add('winner');
                displayOutcome.textContent = 'You Lose!';
            } else if (gameOutcome === 'draw') {
                displayOutcome.textContent = 'Draw...';
            } else if (gameOutcome === 'win') {
                displayOutcome.textContent = 'You Win!';
            }

            //show user's throw
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            switch (userThrow) {
                case 'rock':
                    if (gameOutcome === 'win') {
                        rockButton.classList.add('selected', 'winner');
                    } else {
                        rockButton.classList.add('selected');
                    }
                    break;
                case 'paper':
                    if (gameOutcome === 'win') {
                        paperButton.classList.add('selected', 'winner');
                    } else {
                        paperButton.classList.add('selected');
                    }
                    break;
                case 'scissors':
                    if (gameOutcome === 'win') {
                        scissorsButton.classList.add('selected', 'winner');
                    } else {
                        scissorsButton.classList.add('selected');
                    }
                    break;
            }
            //play again
            playAgainButton.classList.remove('hidden');
    }
}

function updateScoreboard() {
    opponentScoreDisplay.textContent = opponentScore;
    drawScoreDisplay.textContent = drawScore;
    playerScoreDisplay.textContent = playerScore;
}

// event listeners
rockButton.addEventListener('click', () => {
    throwGesture('rock');
});
paperButton.addEventListener('click', () => {
    throwGesture('paper');
});
scissorsButton.addEventListener('click', () => {
    throwGesture('scissors');
});

playAgainButton.addEventListener('click', () => {
    console.log('click');
    playAgain();
});
/* Component Play Again*/
// get DOM

// display

// event listeners

/* Component Scoreboard*/
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
