const form = document.getElementById('guessingForm');
const numInput = document.getElementById('numInput');
const submitBtn = document.getElementById('submitBtn');
let previousCount = document.getElementById('previousGuess');
let guessesRemaining = document.getElementById('guessesRemaining');
let scale = document.getElementById('scale');

form.addEventListener('submit', function (e) {
  let theValue = parseInt(numInput.value);
  /* 

  - You need to get the value of the input
  - You need to put the value of the input in previous guess if its wrong 
  - You need to get a random number between 1-10
  - Place you win under scale section 
  - 

  */

  if (theValue === 3) {
    console.log('volia');
  } else {
    previousCount.textContent += theValue;
  }

  e.preventDefault();
});
