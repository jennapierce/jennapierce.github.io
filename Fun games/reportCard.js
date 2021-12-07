alert("Report Card Simulation!");
alert("Please enter your 4 test grades for each of your 4 classes!");

var sub1 = prompt("What is the first subject you are entering tests for?");
document.write("<h2>" + sub1 + "</h2>")
var sub1Avg = getTestGrades(sub1);
var sub1Letter = calculateLetterGrade(sub1Avg, sub1);
var sub1GPA = calculateGPA(sub1Letter, sub1);

var sub2 = prompt("What is the second subject you are entering tests for?");
document.write("<h2>" + sub2 + "</h2>")
var sub2Avg = getTestGrades(sub2);
var sub2Letter = calculateLetterGrade(sub2Avg, sub2);
var sub2GPA = calculateGPA(sub2Letter, sub2);

var sub3 = prompt("What is the third subject you are entering tests for?");
document.write("<h2>" + sub3 + "</h2>")
var sub3Avg = getTestGrades(sub3);
var sub3Letter = calculateLetterGrade(sub3Avg, sub3);
var sub3GPA = calculateGPA(sub3Letter, sub3);


var sub4 = prompt("What is the fourth subject you are entering tests for?");
document.write("<h2>" + sub4 + "</h2>")
var sub4Avg = getTestGrades(sub4);
var sub4Letter = calculateLetterGrade(sub4Avg, sub4);
var sub4GPA = calculateGPA(sub4Letter, sub4);

document.write("---------------------------------------------------");

calculateOverallGPA(sub1GPA, sub2GPA, sub3GPA, sub4GPA);


//Function Defs Below

function getTestGrades(subject){
  
  var test1 = Number(prompt("What did you get on " + subject + " Test 1?"));
  var test2 = Number(prompt("What did you get on " + subject + " Test 2?"));
  var test3 = Number(prompt("What did you get on " + subject + " Test 3?"));
  var test4 = Number(prompt("What did you get on " + subject + " Test 4?"));
  
  var grade = (test1 + test2 + test3 + test4)/4;
  document.write("<li>" + subject + " Test 1: " + test1 + "</li>");
  document.write("<li>" + subject + " Test 2: " + test2) + "</li>";
  document.write("<li>" + subject + " Test 3: " + test3 + "</li>");
  document.write("<li>" + subject + " Test 4: " + test4 + "</li>");
  document.write("<p>" + "Your average in " + subject + " is: " + grade + "</p>");
  return grade;

}

function calculateLetterGrade(grade, subject){ 
    
  if (grade >= 93) {
    letterGrade = ("A");
  }
  else if (grade >= 85) {
    letterGrade = ("B");
  }
  else if (grade >= 75) {
    letterGrade = ("C");
  }
  else if (grade >= 67) {
    letterGrade = ("D");
  }
  else if (grade >= 0) {
    letterGrade = ("F");
  }
  
  document.write("<h3>" + "Your letter grade for " + subject + " is: " + letterGrade + "</h3>");
  return letterGrade;
}

function calculateGPA(grade, subject){
  
  var typeOfClass = prompt("What type of class is " + subject +"? AP, Honors, or regular?").toLowerCase();
  
  var GPA = 0;
  
  if (typeOfClass === "regular"){
    if (grade === "A") {
      GPA = 4;
    }
    else if (grade === "B") {
      GPA = 3;
    }
    else if (grade === "C"){
      GPA = 2;
    }
    else if (grade === "D") {
      GPA = 1;
    }
    else {
      GPA = 0;
    }
    return GPA;
  }
  
  else if (typeOfClass === "honors"){
    if (grade === "A") {
      GPA = 4.4;
    }
    else if (grade === "B") {
      GPA = 3.3;
    }
    else if (grade === "C"){
      GPA = 2.2;
    }
    else if (grade === "D") {
      GPA = 1.1;
    }
    else {
      GPA = 0;
    }
    return GPA;
  }
  
  else if (typeOfClass === "ap"){
    if (grade === "A") {
      GPA = 5;
    }
    else if (grade === "B") {
      GPA = 4;
    }
    else if (grade === "C"){
      GPA = 3;
    }
    else if (grade === "D") {
      GPA = 2;
    }
    else {
      GPA = 0;
    }
    return GPA;
  }
  
  else {
    alert("Error");
  }
  
}
  
  

function calculateOverallGPA(GPA1, GPA2, GPA3, GPA4){
  
  var cumulativeGPA = (GPA1 + GPA2 + GPA3 + GPA4)/4;
  document.write("<h2>" + "Your cumulative GPA is: " + cumulativeGPA + "</h2>");
  alert("Your cumulative GPA is: " + cumulativeGPA);
  
}





