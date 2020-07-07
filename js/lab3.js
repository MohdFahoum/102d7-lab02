'use strict'

var x = Math.floor(Math.random() * 10) + 1;
var tries = 4;
var hint = 'Guess my number, 1-10!';

while (tries > 0) {
  var guess = prompt(hint +' You have ' + tries + ' guesses left.');
  if (!guess) prompt("you have to try a number");
  guess = Number(guess);
  if (guess == x) {
    tries = 0;
  } else {
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    tries = tries - 1;
  }
}
alert('you are the BOSS! the number is correct ' + x);