const number = [...document.getElementsByClassName('number')];
const operator = [...document.getElementsByClassName('operator')];
const input = document.getElementById('input');
const equation = document.getElementById('equation');
const equals = document.getElementById('equals');

let tempNum;
let firstNum;
let secondNum;
let chosenOperator;

number.forEach(button => 
    button.addEventListener('click', function() {
        input.textContent += button.textContent;
        tempNum = input.textContent;
    }));

operator.forEach(operator => 
    operator.addEventListener('click', function() {
        chosenOperator = operator.textContent;
        equation.textContent += (tempNum + chosenOperator);
        firstNum = tempNum;
        input.textContent = '';
        tempNum = '';
}));

equals.addEventListener('click', function() {
    equation.textContent += tempNum;
    secondNum = tempNum;
    if (chosenOperator == '+') {
        input.textContent = add();
    };
})

function add(firstNum, secondNum) {
    console.log(firstNum + secondNum);
    return firstNum + secondNum
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum
}