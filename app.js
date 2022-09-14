/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'shoot';
let gameOutcome = '';
let userThrow = '';
let opponentThrow = '';

const throwOptions = ['rock', 'paper', 'scissors'];
/* Actions */
function loadPage() {
    updateDisplay();
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
}

/* Component */
// get DOM
const opponentThrowImg = document.getElementById('opponent-gesture');
const displayOutcome = document.getElementById('display-outcome');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

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
    }
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
