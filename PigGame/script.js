'use strict';

//Element values
const playerZeroScoreEl = document.querySelector('#score--0');
const playerOneScoreEl = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new ');
const holdButton = document.querySelector('.btn--hold');
const currentZero = document.getElementById('current--0');
const currentOne = document.getElementById('current--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');

// starting values
playerZeroScoreEl.textContent = 0;
playerOneScoreEl.textContent = 0;
diceEl.classList.add('hidden');
let playersScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchUser = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZero.classList.toggle('player--active');
    playerOne.classList.toggle('player--active');
}
const resetGame = () => {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    currentScore = 0;
    playersScore = [0, 0];
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;

    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
    //total Score Zero
    document.getElementById(`score--0`).textContent = currentScore;
    document.getElementById(`score--1`).textContent = currentScore;
    console.log('reset');
}
const generateRandomDiceRoll = () => {
    if (playing) {
        const rollNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(rollNumber);

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${rollNumber}.png`;

        if (rollNumber !== 1) {
            currentScore += rollNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchUser();
        }
    }
}

rollButton.addEventListener('click', generateRandomDiceRoll);
holdButton.addEventListener('click', () => {
    if (playing) {
        playersScore[activePlayer] += currentScore;
        if (playersScore[activePlayer] <= 100) {
            document.getElementById(`score--${activePlayer}`).textContent = playersScore[activePlayer];
            switchUser();
        } else {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
    }
});
newButton.addEventListener('click', resetGame);