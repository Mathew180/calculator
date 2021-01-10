//const buttons = document.querySelectorAll('.buttonNum');
const output = document.querySelector('[data-current-operand]');
const operator = document.querySelectorAll('[data-operation]');  
const equalButton = document.querySelectorAll('[data-equalButton]'); 
const deleteAll = document.querySelectorAll('[data-delete-button]'); 
const clearAll = document.querySelectorAll('[data-clear-button]'); 
const buttons = document.querySelectorAll('.myBtn');
let currentOperation = '';


//Adding EventListner to the Operator Keys
buttons.forEach(button => {
 button.addEventListener('click', () => {    
       appendNum(button.innerText)
       updateDisplay()
    console.log('numberButon')  
 })
});

operator.forEach(button => {
    button.addEventListener('click', () => {    
        appendNum(button.innerText)
          updateDisplay()
       console.log('operator keys!')  
    })
   });
   
equalButton.forEach(button => {
    button.addEventListener('click', () => {   
        calculateNumber()       
        updateDisplay()
       console.log('operator keys!')  
    })
   });

deleteAll.forEach(button => {
    button.addEventListener('click', () => {
        deleteNum()
        console.log('Third calculator project')
    })
});

clearAll.forEach(clearButton => {
    clearButton.addEventListener('click', () => {
        clearAllOperation()
        console.log('Second calculator project')
    })
});


//Append the button value
function appendNum(number){
    if(number === '.' && currentOperation.includes('.')) return
    currentOperation = output.innerText.toString() + number.toString()
}

//update the value in the box provided above
function updateDisplay(){

    output.innerText = currentOperation
}

//Delete numbers
function  deleteNum(){
    currentOperation = currentOperation.toString().slice(0, -1)
}

//function for the calculation
function calculateNumber(n1){
    let computation;
    const currentCalc = parseFloat(currentOperation)
    
    if (operator === '+') return computation = currentCalc + n1
    if (operator === '-') return computation = currentCalc - n1
    if (operator === '*') return computation = currentCalc * n1
    if (operator === '/') return computation = currentCalc / n1
    
    currentOperation = computation  
}

//clear the value in the box
function clearAllOperation(){
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