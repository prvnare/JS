'use strict';

const congratulationsMessage = '🦋 congratulations!';
const startGameMessage = 'Start guessing...!';
const lostGameMessage = '🌋 You Lost the Game!';
const guessMessgae = 'Guess is too';
const notNumberMessage = '⛔️  not a  number!';
const wonGameColor = '#60b347';
const startGameColor = '#222';
const numberBoxWidthSuccess = '30rem';
const numberBoxWidthBase = '15rem';
const numberSymbol = '?';
const highGraph = '📈';
const lowGraph = '📉';
const high = 'high';
const low = 'low';
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = (message) => document.querySelector('.message').textContent = message;
const setScore = (score) => document.querySelector('.score').textContent = score;
const setBackgroundColor = (color) => document.querySelector('body').style.backgroundColor = color;
const setNumberBoxWidth = (width) => document.querySelector('.number').style.width = width;
const setNumberContent = (number) => document.querySelector('.number').textContent = number;
const setHoghScore = (highScore) => document.querySelector('.highscore').textContent = highScore;
const resetGuess = (value) => document.querySelector('.guess').value = value;

let score = 20;
let highScore = 0;
let secretNumber = generateRandomNumber();

const checkScore = (graph, measure) => {
    if (score > 0) {
        score--;
        setScore(score);
        displayMessage(`${graph} ${guessMessgae} ${measure}!`);
    } else {
        displayMessage(lostGameMessage)
    }
}

const validateNumber = () => {
    const inputValue = Number(document.querySelector('.guess').value);
    // O value
    if (!inputValue) {
        displayMessage(notNumberMessage);
    }
    // Equal to  the Guess 
    else if (inputValue === secretNumber) {
        displayMessage(congratulationsMessage);
        setBackgroundColor(wonGameColor);
        setNumberBoxWidth(numberBoxWidthSuccess);
        setNumberContent(secretNumber);

        if (score > highScore) {
            highScore = score;
        }
        setHighScore(highScore);
    }
    // greater than the Guess 
    else if (inputValue > secretNumber) {
        checkScore(highGraph, high);
    }
    // lesser than the Guess 
    else if (inputValue < secretNumber) {
        checkScore(lowGraph, low);
    }
}

//Reset Functionality
const reset = () => {
    score = 20;
    secretNumber = generateRandomNumber();
    displayMessage(startGameMessage);
    setScore(score);
    setBackgroundColor(startGameColor);
    setNumberBoxWidth(numberBoxWidthBase);
    setNumberContent(numberSymbol);
    resteGuess('');
}

//Event handling
document.querySelector('.check').addEventListener('click', validateNumber);
document.querySelector('.again').addEventListener('click', reset);
