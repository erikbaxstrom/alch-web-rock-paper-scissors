/* Imports */

/* State */
let gameState = 'results';
let gameOutcome = 'lose';
let userThrow = 'scissors';
let opponentThrow = 'scissors';
/* Actions */
function loadPage() {
    updateDisplay();
}

/* Components */

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
            break;
        case 'results':
            //display opponent throw
            opponentThrowImg.src = './assets/' + opponentThrow + '.png';
            if (gameOutcome === 'lose') {
                opponentThrowImg.classList.add('winner');
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

/* Run page load code */
loadPage();

/* Component Play Again*/
// get DOM
// display
// event listeners

/* Component Scoreboard*/
// get DOM
// display
// event listeners
