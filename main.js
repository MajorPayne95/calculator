const number = [...document.getElementsByClassName('number')];
const operator = [...document.getElementsByClassName('operator')];
const input = document.getElementById('input');
const seelectedOp = document.getElementById('selectedOp');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const equals = document.getElementById('equals');

let tempNum = 0;
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
        if (firstNum === undefined) {
            chosenOperator = operator.textContent;
            seelectedOp.textContent += chosenOperator;
            firstNum = tempNum;
            num1.textContent = firstNum;
            input.textContent = '';
            tempNum = '';
        } else if (secondNum === undefined) {
            chosenOperator = operator.textContent;
            seelectedOp.textContent = chosenOperator;
            input.textContent = '';
            tempNum = '';
        } else {
            num2.textContent = '';
            seelectedOp.textContent = '';
            num1.textContent = input.textContent;
            chosenOperator = operator.textContent;
            seelectedOp.textContent = chosenOperator;
            input.textContent = '';
            tempNum = '';
        }
}));

equals.addEventListener('click', function() {
    //seelectedOp.textContent += tempNum;
    secondNum = tempNum;
    num2.textContent = secondNum;

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