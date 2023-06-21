const number1 = 2;
const number2 = 6;

const charge = 500;
const payment = 50;

const tests = 10;
const assignments = 25;
const final = 50;

const firstName = "Dennis";
const lastName = "Nguyen";

let product = number1 * number2;
console.log("value of product:", product);
console.log("type of:", typeof product);

let amountRemaining = charge - payment;
console.log("value of amount remaining:", amountRemaining);
console.log("type of:", typeof amountRemaining);

let grade = (tests + assignments + final) / 3;
console.log("value of grade:", grade);
console.log("type of:", typeof grade);

let fullName = firstName + " " + lastName;
console.log("value of full name:", fullName);
console.log("type of full name:", typeof fullName);

const pH = 8;
let isAcidic = pH < 7;
console.log("value of isAcidic:", pH < 7);
console.log("type of isAcidic:", typeof isAcidic);

const numberOfSoldiers = 420;
let isSparta = numberOfSoldiers === 300;
console.log("value of isSparta:", isSparta);
console.log("type of isSparta:", typeof isSparta);

let nickname = fullName;
const goat = " is the GOAT!";

console.log(fullName += goat);
console.log("type of nickname:" , typeof nickname);
