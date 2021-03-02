'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//display message function
const displayMessage = (msg) => {
    document.querySelector('.message').textContent = msg;
}

// inital conditions
const restoreInital = () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#33333';
    document.querySelector('body').style.backgroundImage = '';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...')
}


const checkBtn = document.querySelector('.check')
checkBtn.addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if(!guess){
        displayMessage('Please enter a valid number')
    } 
    // when guess is correct
    else if (guess === secretNumber){
        displayMessage('Corect Number ! ! !')
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #dce35b, #45b649)';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 
    // combining both too high and too low scenario
    else if (guess !== secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!': 'Too low!'
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
})

// Reset the game to initital conditions
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', restoreInital)