// declare error
// const error = new Error("error");

function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
    if(b === 0){
      throw new Error();
    }
    return a / b;
  
}
// Compare this function from index.js:
module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
// Compare this function from index.js:
