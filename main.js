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
        if (chosenOperator == undefined) {
            chosenOperator = operator.textContent;
            equation.textContent += (tempNum + chosenOperator);
            firstNum = tempNum;
            input.textContent = '';
            tempNum = '';
        } else {
            chosenOperator = operator.textContent;
            equation.textContent += chosenOperator;
            input.textContent = '';
            tempNum = '';
        }
}));

equals.addEventListener('click', function() {
    equation.textContent += tempNum;
    secondNum = tempNum;
    if (chosenOperator == '+') {
        input.textContent = add(firstNum, secondNum);
        firstNum = input.textContent;
    };
    if (chosenOperator == '-') {
        input.textContent = subtract(firstNum, secondNum);
        firstNum = input.textContent;
    };
    if (chosenOperator == 'x') {
        input.textContent = multiply(firstNum, secondNum);
        firstNum = input.textContent;
    };
    if (chosenOperator == '/') {
        input.textContent = divide(firstNum, secondNum);
        firstNum = input.textContent;
    };
})

function add(firstNum, secondNum) {
    //console.log(firstNum);

    return Number(firstNum) + Number(secondNum);
}

function subtract(firstNum, secondNum) {
    return Number(firstNum) - Number(secondNum);
}

function multiply(firstNum, secondNum) {
    return Number(firstNum) * Number(secondNum);
}

function divide(firstNum, secondNum) {
    return Number(firstNum) / Number(secondNum);
}