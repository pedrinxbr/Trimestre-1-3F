let randomNumber =
Math.floor(Math.random() *10) +1;
let attempts = 0;

function checkGuess () {
 
    const userguess = parsenInt(document.getElementyById('guess'))