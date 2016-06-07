var prompt = require('prompt-sync')();
var currentCash = startingCash = 100;
var winnings = 0;
var betCount = 0;
var winCount = 0;
var startingCash = 100;

function randomTen() {
  return Math.ceil(Math.random() * 10);
}

function cashUpdater() {
  currentCash += winnings;
  console.log("Total cash changed to $" + currentCash);
    if (currentCash <= 0) {
       console.log('You lose!');
    }
}



function rangeChecker(currentGuess, answer) {
  currentGuess === answer++ || currentGuess == answer--;
}


while (currentCash>0) {
  var currentBet = prompt('How much do you want to bet? ')
  var currentGuess = prompt('Choose a number from 1 to 10. ')
  if (currentGuess < 1 || currentGuess > 10) {
    console.log('You have to guess between 1 and 10!');
    return;
  }
  var answer = randomTen();
  if (currentGuess === answer) {
    console.log('You guessed correctly! The winning number was ' + answer)
    winnings = currentBet;
    winCount++;
  } else if (rangeChecker(currentGuess, answer)) {
    console.log('You were close! The winning number was ' + answer + '.');
    winnings = 0;
  } else {
    console.log('You guessed incorrectly! The winning number was ' + answer);
    winnings = -currentBet;
  }

  if (currentBet > 0 && currentBet <= currentCash) {
    cashUpdater();
    betCount++;
  } else {
      console.log('You either bet a negative number or you bet more than you have.');
  }

  if(currentCash <= 0) {
    break;
  }
}

