const form = document.getElementById('guessingForm');
const numInput = document.getElementById('numInput');
const submitBtn = document.getElementById('submitBtn');
let previousCount = document.getElementById('previousGuess');
let guessesRemaining = document.getElementById('guessesRemaining');
let scale = document.getElementById('scale');

form.addEventListener('submit', function (e) {
  console.log('Hello World');
  e.preventDefault();
});
