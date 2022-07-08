const form = document.getElementById('guessingForm');
const numInput = document.getElementById('numInput');
const submitBtn = document.getElementById('submitBtn');
let previousCount = document.getElementById('previousGuess');
let guessesRemaining = document.getElementById('guessesRemaining');
let scale = document.getElementById('scale');
let randomNumber = Math.floor(Math.random() * 10);

form.addEventListener('submit', function (e) {
  let theValue = parseInt(numInput.value);

  /* 

  - You need to get the value of the input
  - You need to put the value of the input in previous guess if its wrong 
  - You need to get a random number between 1-10
  - Place you win under scale section 
  - if the value is less than the random number append too low try again. 

  */

  if (theValue < randomNumber) {
    scale.textContent = 'Too low! Try again!';
  } else if (theValue > randomNumber) {
    scale.textContent = 'Too High! Try again!';
  } else {
    scale.style.color = 'green';
    scale.textContent = 'Volia! You win!';
  }

  if (theValue === randomNumber) {
  } else {
    previousCount.textContent += theValue;
  }

  e.preventDefault();
});

console.log(randomNumber);
