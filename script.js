'use strict'

function generateNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess) {
        displayMessage('⚠️ No number!');
    
    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🥳 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too Low! 📉');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the Game! 🤡');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = generateNumber();
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
