'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check')
checkBtn.addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'Please enter a valid number'
    } 
    // when guess is correct
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct number !!'
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #dce35b, #45b649)';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 
    // when guess is too high
    else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;

        }
    } 
    //when guess is too low
    else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too low!'
            score --;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }

})

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click',()=>{
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#33333';
    document.querySelector('body').style.backgroundImage = '';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
})