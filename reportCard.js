/*alert("Report Card Simulation!");
alert("Please enter your 4 test grades for each of your 4 classes!");

var sub1 = prompt("What is the first subject you are entering tests for?");
var sub1Avg = getTestGrades(sub1);
var sub1Letter = calculateLetterGrade(sub1Avg, sub1);
var sub1GPA = calculateGPA(sub1Letter, sub1);

var sub2 = prompt("What is the second subject you are entering tests for?");
var sub2Avg = getTestGrades(sub2);
var sub2Letter = calculateLetterGrade(sub2Avg, sub2);
var sub2GPA = calculateGPA(sub2Letter, sub2);



var sub3 = prompt("What is the third subject you are entering tests for?");
var sub3Avg = getTestGrades(sub3);
var sub3Letter = calculateLetterGrade(sub3Avg, sub3);
var sub3GPA = calculateGPA(sub3Letter, sub3);



var sub4 = prompt("What is the fourth subject you are entering tests for?");
var sub4Avg = getTestGrades(sub4);
var sub4Letter = calculateLetterGrade(sub4Avg, sub4);
var sub4GPA = calculateGPA(sub4Letter, sub4);

console.log("---------------------------------------------------");

calculateOverallGPA(sub1GPA, sub2GPA, sub3GPA, sub4GPA);
*/

//Function Defs Below

function getCourses(){

    var subject = prompt("What subject are you entering?");
    return subject;
}

function getTestGrades(subject){
  
  var test1 = Number(prompt("What did you get on " + subject + " Test 1?"));
  var test2 = Number(prompt("What did you get on " + subject + " Test 2?"));
  var test3 = Number(prompt("What did you get on " + subject + " Test 3?"));
  var test4 = Number(prompt("What did you get on " + subject + " Test 4?"));
  
  var grade = (test1 + test2 + test3 + test4)/4;
  console.log(subject + " Test1: " + test1);
  console.log(subject + " Test2: " + test2);
  console.log(subject + " Test3: " + test3);
  console.log(subject + " Test4: " + test4);
  console.log("Your average in " + subject + " is: " + grade);
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
  
  console.log("Your letter grade for " + subject + " is: " + letterGrade);
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
  console.log("Your cumulative GPA is: " + cumulativeGPA);
  alert("Your cumulative GPA is: " + cumulativeGPA);
  
}






