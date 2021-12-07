var start = 100;
alert("Welcome! Pick a number between 1-6, if you guess the correct number, you win 6 times your wager amount! If you lose, you lose your wager amount!");

do{
  var guess = Number(prompt("What number do you guess?"));
  var wager = Number(prompt("You have: " + start + " points. How many points are you wagering?"));
  correctNumber = guessTheNumber(guess);

  if (guess === correctNumber){
    start = winWager(start, wager);
  }
  else {
    start = loseWager(start, wager);
  }
  
  var goAgain = prompt("Would you like to go again? Enter true or false").toLowerCase();

} while(goAgain === "true");

alert("Thanks for playing");
document.write("<h2> Thanks for playing </h2>");

//function decs

function guessTheNumber(number){
  
  var roll = Math.ceil(Math.random() * 6);
  document.write("<h3> The lucky number is: " + roll + " Your number was: " + number + "</h3>");
  alert("The lucky number is: " + roll + " Your number was: " + number);
  return roll;
}

function winWager(startAmount, wagerAmount){
  
  startAmount = (6*wagerAmount) + startAmount;
  document.write("<h1> You win!!!! " + startAmount + " points! </h1>");
  alert("You win!!!! $" + startAmount);
  return startAmount;
}

function loseWager(startAmount, wagerAmount){
  
  startAmount = startAmount - wagerAmount;
  document.write("<h2> Better luck next time... " + startAmount + " points </h2>");
  alert("Better luck next time... $" + startAmount);
  return startAmount;
}






