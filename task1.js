//Task 1: Grade Calculator
let marks = "85";            
let score = Number(marks);   

switch (true) {
  case (score >= 90 && score <= 100):
    console.log("Grade: A");
    break;
  case (score >= 75 && score <= 89):
    console.log("Grade: B");
    break;
  case (score >= 50 && score <= 74):
    console.log("Grade: C");
    break;
  case (score < 50):
    console.log("Grade: Fail");
    break;
  default:
    console.log("Invalid Marks");
}


//Task 2: Even/Odd & Day Message 
let numStr = "12";           
let number = Number(numStr); 

// Even/Odd using switch
switch (number % 2) {
  case 0:
    console.log(number + " is Even");
    break;
  case 1:
    console.log(number + " is Odd");
    break;
  default:
    console.log("Invalid Number");
}

// Day check using switch
let day = 6;  
switch (day) {
  case 1: case 2: case 3: case 4: case 5:
    console.log("It's a weekday");
    break;
  case 6: case 7:
    console.log("It's the weekend");
    break;
  default:
    console.log("Invalid day");
}
