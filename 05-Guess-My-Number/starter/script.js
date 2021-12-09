'use strict';

let input = document.querySelector('.guess');
const againButton = document.querySelector('.again');
let checkButton = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
let number = document.querySelector('.number');
const body = document.querySelector('body');

const randomNumberGenerator = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
let scoreNumber = 20;
let randomNumber = randomNumberGenerator(1, 20);
// number.textContent = randomNumber;

checkButton.addEventListener('click', function () {
  let inputV = Number(input.value);
  // console.log(input, typeof input);

  if (!inputV) {
    message.textContent = 'Pick up the number between 1 and 20';
  } else if (inputV === randomNumber) {
    message.textContent = 'Correct Number!';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = randomNumber;
  } else if (inputV < randomNumber) {
    if (scoreNumber > 1) {
      scoreNumber--;
      score.textContent = scoreNumber;
      message.textContent = 'Too low';
    } else {
      message.textContent = 'You lost';
      score.textContent = 0;
    }
  } else if (inputV > randomNumber) {
    if (scoreNumber > 1) {
      scoreNumber--;
      score.textContent = scoreNumber;
      message.textContent = 'Too high';
    } else {
      message.textContent = 'You lost';
      score.textContent = 0;
    }
  }
});

againButton.addEventListener('click', function () {
  scoreNumber = 20;
  score.textContent = scoreNumber;
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  input.value = '';
  randomNumber = randomNumberGenerator(1, 20);
});
