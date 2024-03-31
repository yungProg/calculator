// lists of elements
const display = document.getElementById("display")
const number = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")
const negate = document.getElementById("negate")
const percentage = document.getElementById("percentage")
const decimalPoint = document.getElementById("decimalPoint")

// global variables
let firstNum = ""
let secondNum = ""
let operator = ""
let isEqualSignClicked = false

// display digits
function displayDigit(digit) {
    if (isEqualSignClicked) {
        firstNum = ""
        secondNum = ""
        display.value = firstNum
        operator = ""
        isEqualSignClicked = false
    }
    if (operator === "") {
        firstNum += digit
        display.value = firstNum
    }
    if (operator) {
        secondNum += digit
        display.value = secondNum
    }    
    display.value != "0" ? clear.textContent = "C" : clear.textContent = "AC"
    console.log("first Number" ,firstNum);
    console.log("second Number" ,secondNum);
    console.log(isEqualSignClicked);
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {displayDigit(number[i].textContent)})
}

// operator capture
function operation(mathOperator) {
    if (secondNum) {
        if (!isEqualSignClicked) {
            firstNum = Function(`return ${firstNum} ${operator} ${secondNum}`)()
            firstNum == "Infinity" ? firstNum = "Error" : ""
        }
        isEqualSignClicked = false
        display.value = firstNum
        secondNum = ""
        console.log(firstNum)
    }
    operator = mathOperator
    console.log(operator);
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {operation(operators[i].value)})
}

// second number capture


// calculate with equal 
function equalSign() {
    firstNum = Function(`return ${firstNum} ${operator} ${secondNum}`)()
    if (firstNum == "Infinity") {
        display.value = "Error"
    } else display.value = firstNum
    isEqualSignClicked = true
    console.log(isEqualSignClicked)
}

equal.addEventListener("click", equalSign)

// clear second number

// clear everything
clear.addEventListener("click", () => {
    clear.textContent = "AC"
    firstNum = ""
    secondNum = ""
    operator = ""
    display.value = 0
    isEqualSignClicked = false
})

negate.addEventListener("click", () => {
    firstNum == display.value ? firstNum *= -1 : ""
    display.value = firstNum
})

percentage.addEventListener("click", () => {
    firstNum == display.value ? firstNum /= 100 : ""
    display.value = firstNum
})

decimalPoint.addEventListener("click", () => {
    let numArr = firstNum.split("")
    numArr.some(item => item == ".") ? "" : firstNum += "."
    display.value = firstNum
})