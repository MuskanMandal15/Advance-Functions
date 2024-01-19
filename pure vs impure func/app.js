// pure functions
//the functions that same input always give same outputs
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 6)); //7
console.log(add(10, 15)); //25

//impure functions
// impure function changes its states everytime, impure functions causes side effects

function random(num1) {
  return num1 + Math.random();
}
console.log(random(5)); // always got random number everytime we refreshes

let previousNumber = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousNumber = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["cooking", "playing"];

function printHobbies(h) {
  h.push("new hobby");
  console.log(h);
}

printHobbies(hobbies);
