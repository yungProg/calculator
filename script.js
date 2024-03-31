const display = document.querySelector(".display")
const clear = document.getElementById("clear")
const plusOrNegative= document.getElementById("plusOrNegative")
const percentage = document.getElementById("percentage")
const digits = document.querySelectorAll(".number")
const decimalPoint = document.getElementById("decimalPoint")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")

let firstNum = 0
let operator = ""
let secondNum = ""
let result = ""

function val(param) {
    if (display.value === "0"  || display.value.length == 0) {
        display.value = param.innerText
    } else {
        display.value += param.innerText
    }
    if (operator !== "") {
        display.value = ""
        secondNum += param.innerText
        display.value += secondNum
    } 
    display.value > 0 ? clear.innerText = "C" : clear.innerText = "AC"
}

for (let i = 0; i < digits.length; i++) {
    const element = digits[i];
    element.addEventListener("click", () => {val(element)})
}

clear.addEventListener("click", () => {
    display.value = "0"
    clear.innerText = "AC"
    firstNum = 0
    operator = ""
    secondNum = ""
    result = ""
})

plusOrNegative.addEventListener("click", () => {
    display.value *= -1
    console.log(typeof display.value)
})

percentage.addEventListener("click", () => {
    display.value = Number(display.value)/100
    console.log(typeof display.value);
})

decimalPoint.addEventListener("click", () => {
    let displayArr = display.value.split("");
    let secondNumArr = secondNum.split("")
    if (display.value) {
        displayArr.some(item => item == ".") ? "" : display.value += decimalPoint.innerText
    }
    if (secondNum) {
        secondNumArr.some(item => item == ".") ? "" : secondNum += decimalPoint.innerText
    }
})

//console.log(digits);

// code for operations


function cal(el) {
    operator = el.value
    if (operator === "") {
        firstNum = display.value
        //operator = el.value
    } else {
        result = Function(`return ${firstNum} ${operator} ${secondNum}`)()
        console.log(result);
        display.value = result
        firstNum = result
        operator = el.value
        secondNum = ""
    }
    console.log(firstNum, operator, secondNum)
}

for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.addEventListener("click", () => {cal(element)})
}

equal.addEventListener("click", () => {
    if (!secondNum) {
        result = firstNum
    } else {
        result = Function(`return ${firstNum} ${operator} ${secondNum}`)()
    }
    display.value = result
})