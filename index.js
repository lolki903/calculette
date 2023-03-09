function add(a, b) {
    //test unitaire
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function testadd(a,b) {
    const resuk = a+b
  const result = add(a, b);
  if (result !== resuk) {
    throw new Error(`error pas bon:  ${result}`);
  }
}
function testsubtract(a,b) {
    const resuk = a-b
  const result = subtract(a, b);
  console.log(result);
  if (result !== resuk) {
    throw new Error(`error pas bon:  ${result}`);
  }else{
    return result
  }
}
function testmultiply(a,b) {
    const resuk = a*b
  const result = multiply(a, b);
  if (result !== resuk) {
    throw new Error(`error pas bon:  ${result}`);
  }else{
    return result
  }
}
function testdivide(a,b) {
const resuk = a/b
  const result = divide(a, b);
  if (result !== resuk) {
    return result;
  }
  else if(result < 0){
    throw new Error(`error pas bon: ${result}`);
  }
  else{
    return result
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return testadd(a, b);
    case '-':
        return testsubtract(a, b);
    case '*':
        return testmultiply(a, b);
    case '/':
        return testdivide(a, b);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
  const formData = new FormData(form);
  const a = Number(formData.get('pre'));
  const b = Number(formData.get('deu'));
  const operator = formData.get('ded');
  const result = operate(operator, a, b);
  document.querySelector('#der').textContent = result;
});