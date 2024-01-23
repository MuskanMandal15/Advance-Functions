function power(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  // return result;
}
// console.log(power(2, 3)); // this is normal way of writing a function

// now in recursion will do - function call itself in recursion

function powerOf(x, y) {
  if (y === 1) {
    return x;
  }
  return x * powerOf(x, y - 1);
}
console.log(powerOf(2, 3));

function abc() {
  console.log("first");
  // abc();
}

abc();
