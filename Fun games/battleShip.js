var userGuessRow = "";
var userGuessColumn = 1;

//               0    1    2    3    4    5    6    7    8    9
var compRowA = ["a" ," ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
var compRowB = ["b" ," ", "x", "x", "x", "x", "x", " ", " ", " ", " "];
var compRowC = ["c" ," ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
var compRowD = ["d" ," ", " ", " ", "x", "x", "x", "x", " ", " ", " "];
var compRowE = ["e" ," ", "x", " ", " ", " ", " ", " ", " ", " ", " "];
var compRowF = ["f" ," ", "x", " ", " ", " ", " ", " ", " ", " ", " "];
var compRowG = ["g" ," ", "x", " ", " ", " ", " ", " ", " ", "x", " "];
var compRowH = ["h" ," ", " ", " ", " ", " ", " ", " ", " ", "x", " "];
var compRowI = ["i" ," ", " ", " ", "x", "x", "x", " ", " ", " ", " "];
var compRowJ = ["j" ," ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

//                0    1    2    3    4    5    6    7    8    9
var guessRowA = ["a", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowB = ["b", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowC = ["c", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowD = ["d", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowE = ["e", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowF = ["f", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowG = ["g", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowH = ["h", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowI = ["i", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];
var guessRowJ = ["j", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o ", " o "];


function play(){

  printRows();
  updateGuessRow();
  updateGuessColumn();

  document.write(userGuessColumn);
  document.write(userGuessRow);

  switch (userGuessRow){

    case "a":
      if (compRowA[userGuessColumn] === "x"){
        console.log("It's a hit!");
      }
      else {
        console.log("It's a miss!");
      }
     guessRowA[userGuessColumn] = "x";
     break;

     case "b":
      if (compRowB[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowB[userGuessColumn] = "x";
     break;

     case "c":
      if (compRowC[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowC[userGuessColumn] = "x";
     break;

     case "d":
      if (compRowD[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowD[userGuessColumn] = "x";
     break;

     case "e":
      if (compRowE[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowE[userGuessColumn] = "x";
     break;

     case "f":
      if (compRowF[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowF[userGuessColumn] = "x";
     break;

     case "g":
      if (compRowG[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowG[userGuessColumn] = "x";
     break;

     case "h":
      if (compRowH[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowH[userGuessColumn] = "x";
     break;

     case "i":
      if (compRowI[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowI[userGuessColumn] = "x";
     break;

     case "j":
      if (compRowJ[userGuessColumn] === "x"){
        alert("It's a hit!");
      }
      else {
        alert("It's a miss!");
      }
     guessRowJ[userGuessColumn] = "x";
     break;
  }

  printRows();
  
}

function updateGuessRow (){
  var guessGrab = document.getElementById('guessRow');
  userGuessRow = guessGrab.options[guessGrab.selectedIndex].value;
}

function updateGuessColumn (){
  var guessGrab = document.getElementById('guessColumn');
  userGuessColumn = guessGrab.options[guessGrab.selectedIndex].value;
}

function printRows(){
  
  document.write("------------------------");
  document.write("<p>" + guessRowA + "</p>");
  document.write("<p>" + guessRowB + "</p>");
  document.write("<p>" + guessRowC + "</p>");
  document.write("<p>" + guessRowD + "</p>");
  document.write("<p>" + guessRowE + "</p>");
  document.write("<p>" + guessRowF + "</p>");
  document.write("<p>" + guessRowG + "</p>");
  document.write("<p>" + guessRowH + "</p>");
  document.write("<p>" + guessRowI + "</p>");
  document.write("<p>" + guessRowJ + "</p>");
  document.write("------------------------");

}








