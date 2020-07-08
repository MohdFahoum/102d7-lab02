'use strict';

// var x = Math.floor(Math.random() * 10) + 1; // let the computer pic a number
var x = 5 ;
var tries = 4;
var hint = 'Guess my number, 1-10!';
var guess ;
var guessArray = new Array();
function ques6(){
  guessArray.push(guess); // pushes the answers inside the array

  while (tries > 0) { //used the while to keep tries till reach 4 times
    guess = prompt(hint + 'You have ' + tries + ' guesses left.');
    if (!guess) prompt('you have to try a number');
    guess = Number(guess);
    if (guess == x) {
      alert('Nice job! You guessed the correct number! It took you ' + guessArray.length + ' tries!');
      tries = 0;
    } else {
      if (guess < x) hint = ' Too small!';
      if (guess > x) hint = ' Too big!';
      tries = tries - 1;
    }
  }
  alert('you are the BOSS! the number is correct ' + x);
}
ques6();
