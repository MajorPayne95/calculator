const number = [...document.getElementsByClassName('number')];
const operator = [...document.getElementsByClassName('operator')];
const input = document.getElementById('input');
const equation = document.getElementById('equation');
const equals = document.getElementById('equals');
const allClear = document.getElementById('allClear');

let firstNum;
let secondNum;
let firstOperator;
let chosenOperator;

number.forEach(button => 
    button.addEventListener('click', function() {
      if (chosenOperator === undefined) {
        equation.textContent += button.textContent;
        firstNum = equation.textContent;
      } else {
        secondNum = button.textContent;
        equation.textContent += secondNum;
      }
}));
   

operator.forEach(operator => 
    operator.addEventListener('click', function() {
        if (secondNum === undefined) {
          firstOperator = operator.textContent;
          equation.textContent = (firstNum + firstOperator);
          chosenOperator = firstOperator;
        } else {
            
        	if (chosenOperator == '+') {
        		input.textContent = add(firstNum, secondNum);
        		firstNum = input.textContent;
				secondNum = undefined;
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
				chosenOperator = operator.textContent;
				equation.textContent += chosenOperator;
        }
}));

equals.addEventListener('click', function() {
    if (chosenOperator == '+') {
        input.textContent = add(firstNum, secondNum);
        firstNum = input.textContent;
        secondNum = undefined;
    };
    if (chosenOperator == '-') {
        input.textContent = subtract(firstNum, secondNum);
        firstNum = input.textContent;
        secondNum = undefined;
    };
    if (chosenOperator == 'x') {
        input.textContent = multiply(firstNum, secondNum);
        firstNum = input.textContent;
        secondNum = undefined;
    };
    if (chosenOperator == '/') {
        input.textContent = divide(firstNum, secondNum);
        firstNum = input.textContent;
        secondNum = undefined;
    };
})

allClear.addEventListener('click', function () {
    firstNum = undefined;
    secondNum = undefined
    firstOperator = undefined;
    chosenOperator = undefined;
    input.textContent = '';
    equation.textContent = '';
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