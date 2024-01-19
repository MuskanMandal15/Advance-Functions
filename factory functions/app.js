function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return tax * amount;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// closure and lexical scoping

let person = "muskan";

function outer() {
  // let person = "muskan";
  function inner() {
    console.log("inner", person);
  }
  inner();
}
person = "mandal";
outer();

function objects() {
  let brand = "mercedes";
  function car() {
    console.log(brand);
  }
  brand = "BMW";
  car();
}
objects();
