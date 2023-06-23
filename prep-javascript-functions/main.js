function addTwoNumbers (a,b){
  return a + b;
};

let addTwoNumbersResult = addTwoNumbers(2,2);
console.log("Add two numbers exercise:", addTwoNumbersResult);

function convertHoursToMinutes (hours){
  return hours * 60;
};

let hours = convertHoursToMinutes(3);
console.log("Convert hours to minutes exercise:", hours);

function getGreeting(name){
  return 'Hello ' + name + '!';
};

let name = getGreeting("Superman");
console.log("Greeting exercise:", name);

function addAndMultiplyBy5(a,b){
  return (a + b) * 5;
};

let addAndMultiplyResults = addAndMultiplyBy5(2,6);
console.log("Add and multiply by 5 result:", addAndMultiplyResults);

function multiplyAndDivideBy5(a,b){
  return (a * b) / 5;
};

let multiplyAndDivideBy5Results = multiplyAndDivideBy5(10,5);
console.log("Multiply and Divide by 5 result:", multiplyAndDivideBy5Results);

function subtractTwoNumbers(a,b){
  return a - b;
};

let subtractTwoNumbersResults = subtractTwoNumbers(30,13);
console.log("Subtract two numbers result:", subtractTwoNumbersResults);

function getCircleCircumference(radius){
  return (2 * 3.14 * radius);
};

let radius = getCircleCircumference(24);
console.log("Get circle circumference results:", radius);

function getFullName(firstName, lastName){
  return firstName + " " + lastName;
};

let fullName = getFullName("Jon", "Snow");
console.log("Full name exercise:", fullName);

function cube(a){
  return a * a * a;
};

let cubeResult = cube(5);
console.log("Cube result exercise:", cubeResult);
