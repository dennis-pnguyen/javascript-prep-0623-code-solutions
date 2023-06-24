// create your loops here.

function whileLoop1(){
 let numbers = [];
 let i = 0;

 while (i < 10) {
  numbers.push(i);
  i++;
 }
 return numbers;
};

console.log("whileLoop1 output", whileLoop1());

function whileLoop2(){
  let numbers = [];
  let i = 0;

  while (i < 20){
    numbers.push(i);
    i+=2;
  }
  return numbers;
};

console.log("whileLoop2 output", whileLoop2());

function forLoop1(){
  let numbers =[];
  for (let i = 0; i < 10; i++){
    numbers.push(i);
  }
  return numbers;
};

console.log("forLoop1 output", forLoop1());

function forLoop2 (){
  for (let i = 100; i >=1; i--){
    console.log("Time to explosion " + [i] + "!");
  }
};
forLoop2();

function forInLoop1(object){
  let propNames = [];

  for (let propertyName in object){
    propNames.push(propertyName);
  }
  return propNames;
};

const object = {name: "Anakin Skywalker", age:23, hobby: "Killing younglings", lightsaber: "blue"};

console.log("forInLoop1 output", forInLoop1(object));

function forInLoop2(object){
  let propValues = [];

  for (let propertyName in object) {
    propValues.push(object[propertyName]);
  }
  return propValues;
};

console.log("forInLoop2 output", forInLoop2(object));
