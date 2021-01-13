const buttons = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operation-button]') 
const equalButton = document.querySelectorAll('[data-equals-button]') 
const deleteAll = document.querySelectorAll('[data-delete-button]')
const clearAll = document.querySelectorAll('[data-clear-button]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
let currentOperand = ''
let previousOpernd = ''
let operation = undefined

//const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//Adding EventListner to the Operator Keys
buttons.forEach(button => {
 button.addEventListener('click', () => {    
       appendNumber(button.innerText)
    
    console.log(button.innerText)
 })
});

/*operator.forEach(button => {
    button.addEventListener('click', () => {    
        chooseOperation(button.innerText)
        updateDisplay()
       console.log('operator keys!')  
    })
   });
   
equalButton.forEach(button => {
    button.addEventListener('click', () => {   
        compute()       
        updateDisplay()
       console.log('equal keys!')  
    })
   });

deleteAll.forEach(button => {
   button.addEventListener('click', () => {
      deleted()
      updateDisplay()
        console.log('Third calculator project')
    })
});

clearAll.forEach(button => {
    button.addEventListener('click', () => {
       clear()
       updateDisplay()
        console.log('Second calculator project')
    })
});*/




   
    function appendNumber(numbers){
    // if(numbers === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperandTextElement.innerText.toString() + numbers.toString()
    }

    function deleted(){
        currentOperand = currentOperand.toString().slice(0, -1)
    }
    
        function chooseOperation(operation){
            if(currentOperand === '') return
            if(previousOpernd != ''){
                compute()
            }
            operation = operation
            previousOpernd = currentOperand
            currentOperand = ''
        }
    
        function getFormattedNumber(num){
            const n = Number(num)
            const value = n.toLocaleString("en")
            return value
        }
    
    function reverseNumber(num){
        return Number(num.replace(/,/g,''))
    }
    
        function compute(){
            let computation
            const prev = parseFloat(this.previousOpernd)
            const current = parseFloat(this.currentOperand)
            if(isNaN(prev) || isNaN(current))return
            if(operation === '+'){
             computation = prev + current
            }
    
            if(operation === '-'){
                computation = prev - current
               }
    
               if(operation === '/'){
                computation = prev / current
               }
    
               if(operation === '*'){
                computation = prev * current
               }
    
            currentOperand = computation
            previousOpernd = ''
            operation = undefined
        }
    function updateDislay(){
        currentOperandTextElement.innerText = currentOperand
        previousOperandTextElement.innerText = previousOperand
    }
  


//}



/*/Append the button value
function appendNum(number){
    if(number === '.' && currentOperation.includes('.')) return
    currentOperation =  currentOperation.toString() + number.toString()
}

//update the value in the box provided above
function updateDisplay(){
    output.innerText = currentOperation
    
}


function chooseOperation(operation) {  
    operations = operation
    currentOperation += operations
}

//Delete numbers
//function  deleteNum(){
   // currentOperation = currentOperation.toString().slice(0, -1)
//}

//function for the calculation
function calculateNumber(n1,n2){
    let computation = '';

    const currentCalc = parseFloat(currentOperation)
    
    if(isNaN(currentCalc)) return

    if (operations === '+'){
        computation = parseFloat(n1) + parseFloat(n2)
    }

    
    return computation  
    
}

//clear the value in the box
function clearAllOperation(){
    currentOperation = ''
    output.innerText = ''
}


/*
//Adding EventListner to the Operator                                               
keys.forEach(key => {
    key.addEventListener('click', e => {  
       // if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent

            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
            ) {
                currentOperation.append(key.textContent)
                updateDisplay()
                console.log('operator key!')
            }
            if (action === 'decimal') {
                if(output.textContent.includes('.'))return
                output.append(keyContent)

                console.log('decimal key!')
            }
            
            if (action === 'delete') {
                deleteNum()
                console.log('delete key!')
            }            

            if (action === 'clear') {
                output.innerText = "";
                console.log('clear key!')
            }
            
            if (action === 'calculate') {
                 calculate(currentOperation)
                updateDisplay()
                console.log('equal key!')
           }
       // }  //If statement to check if the buttons match operator
    }) //Add an EentListener to each keys
}); //Loop through the data-action*/

/*

equalButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Fourth calculator project')
    })
});


operands.forEach(operand => {kk
    operand.addEventListener('click', () => {
        console.log('fifth calculator project')
        appendNum()
    })
});

output.forEach(button => {
    button.addEventListener('click', () => {
        console.log('fifth calculator project')
        appendNum()
    })
});
  
*/