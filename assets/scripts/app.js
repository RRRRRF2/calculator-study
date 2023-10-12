const defalutResult = 0;
let currentResult = defalutResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber,  
    newResult)
    {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number : operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
    }


function calculateResult(calculationType){
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' &&
        !enterNumber
    ){
        return;
    }

    // if(
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE' 
    // ){
        const enterNumber = getUserNumberInput();
        const initalResult = currentResult;
        let mathOperator;
        if(calculationType === 'ADD'){
            currentResult += enterNumber;
            mathOperator = '+';
        }else if(calculationType === 'SUBTRACT'){
            currentResult -= enterNumber;
            mathOperator = '-';
        }else if(calculationType === 'MULTIPLY'){
            currentResult *= enterNumber;
            mathOperator = '*';
        }else if(calculationType === 'DIVIDE'){
            currentResult /= enterNumber;
            mathOperator = '/';
        }
        createAndWriteOutput(mathOperator, initalResult, enterNumber);
        writeToLog(calculationType, initalResult, enterNumber, currentResult);   
    }
// }

function add() {
    calculateResult('ADD')
}


function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}
function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);