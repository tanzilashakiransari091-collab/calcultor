
var input = document.querySelector("input");


var firstNum = "";
var secondNum = "";
var operator = "";
var isSecondNum = false;

// Add number or decimal
function add(num) {
    if (!isSecondNum) {
        firstNum += num;
        input.value = firstNum;
    } else {
        secondNum += num;
        input.value = secondNum;
    }
}


function setOp(op) {
    if (firstNum === "") return; 
    if (secondNum !== "") {
        
    }
    operator = op;
    isSecondNum = true;
}


function clearAll() {
    firstNum = "";
    secondNum = "";
    operator = "";
    isSecondNum = false;
    input.value = "";
}

function delOne() {
    if (!isSecondNum) {
        firstNum = firstNum.slice(0, -1);
        input.value = firstNum;
    } else {
        secondNum = secondNum.slice(0, -1);
        input.value = secondNum;
    }
}


function clearOne() {
    if (!isSecondNum) {
        firstNum = "";
        input.value = "";
    } else {
        secondNum = "";
        input.value = "";
    }
}


function equal() {
    var result;
    var num1 = parseFloat(firstNum);
    var num2 = parseFloat(secondNum);

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            clearAll();
            return;
        }
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        return;
    }

    input.value = result;
  
    firstNum = result.toString();
    secondNum = "";
    operator = "";
    isSecondNum = false;
}