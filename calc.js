class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
       this.currentOperand = ''
       this.previousOperand = ''
       this.operation = undefined
    }

    clear(){
       this.currentOperand = ''
       this.previousOperand = ''
       this.operation = undefined
    }

    appendNumber(num){
        if(this.currentOperand.includes('.')){
            if(num ===('.'))return 
        }
        this.currentOperand = this.currentOperand.toString() + num.toString()
    }

    deleteNumber(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseOperand(operand){
        if(this.currentOperand === '')return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operand
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
         if (isNaN(prev) || isNaN(current)) return 

        switch(this.operation){
            case '+':
            computation = prev + current
          break
          case '-':
            computation = prev - current
          break
          case '*':
            computation = prev * current
          break
          case '/':
            computation = prev / current
          break
          default:
              return  
        } 
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

        getFormattedNumber(num){
            const n = Number(num)
            const value = n.toLocaleString("en")
            return value
        }

    updateDisplay(){
        this.currentOperandTextElement.innerText = `${this.getFormattedNumber(this.currentOperand)}`
        if(this.operation != null){
        this.previousOperandTextElement.innerText = `${this.getFormattedNumber(this.previousOperand)}${this.operation}${(this.currentOperand)}`
        }else{
            this.previousOperandTextElement.innerText = this.previousOperand
        }
    }

}

const buttons = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operation-button]') 
const equalButton = document.querySelectorAll('[data-equals-button]') 
const deleteAll = document.querySelectorAll('[data-delete-button]')
const clearAll = document.querySelectorAll('[data-clear-button]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


buttons.forEach(button => {
       button.addEventListener('click', () => { 
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
          console.log('number keys!')  
       })
    })

    operator.forEach(button => {
        button.addEventListener('click', () => { 
         calculator.chooseOperand(button.innerText)
         calculator.updateDisplay()
           console.log('operand keys!')  
        })
     })
    
    deleteAll.forEach(button => {
        button.addEventListener('click', () => { 
         calculator.deleteNumber()
         calculator.updateDisplay()
           console.log('delete keys!')  
        })
     })

     clearAll.forEach(button => {
        button.addEventListener('click', () => { 
         calculator.clear()
         calculator.updateDisplay()
           console.log('operator keys!')  
        })
     })

     equalButton.forEach(button => {
        button.addEventListener('click', () => { 
         calculator.compute()
         calculator.updateDisplay()
           console.log('equal keys!')  
        })
     })
   
   /* function printHistory(currentOperands){
       document.querySelector('[data-previous-operand]').innerText = currentOperands
   }


    function getOutput(){
    return document.querySelector('.output').innerText; 
    }

    function updateDislay(num){
    const emily = document.querySelector('[data-current-operand]').innerText = appendNumber(num)
    const chauffer = getFormattedNumber(emily)
    return chauffer
    }


    function historyDisplay(num){
      document.querySelector('[data-previous-operand]').innerText = num
    }
    //historyDisplay(444444444)
   
     function appendNumber(num){
    return  currentOperand = currentOperand.toString() + num.toString()
    
    }

    function deleted(){
    return currentOperand = currentOperand.toString().slice(0, -1)
    }




    
       /* function chooseOperation(operation){
            if(currentOperand === '') return
            if(previousOpernd != ''){
               return compute()
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
    
    function reverseNumber(nums){
        return Number(nums.replace(/,/g,''));
    }


    //Adding EventListner to the Operator Keys
    buttons.forEach(button => {
      button.addEventListener('click', () => { 
        updateDislay(button.innerText) 
      console.log(button.innerText)
    })
   });
   
  /* operator.forEach(button => {
       button.addEventListener('click', () => { 
           previousOperand  = chooseOperation(button.innerText)
        updateDislay(previousOperand)
          console.log('operator keys!')  
       })
      });
      
 equalButton.forEach(button => {
       button.addEventListener('click', () => {   
           compute()       
           updateDisplay()
          console.log('equal keys!')  
       })
      });*/
   
 /*  deleteAll.forEach(button => {
      button.addEventListener('click', () => {
        updateDislay(deleted())
           console.log('Third calculator project')
       })
   });
   
   clearAll.forEach(button => {
       button.addEventListener('click', () => {
               updateDislay("")
           console.log('Second calculator project')
       })
   });
   

    function compute(){
        let computation
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currentOperand)
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
        previousOperand = ''
        operation = undefined
    }

    //Append the button value
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
    }*/

    //Delete numbers
    //function  deleteNum(){
    // currentOperation = currentOperation.toString().slice(0, -1)
    //}

    //function for the calculation
   /* function calculateNumber(n1,n2){
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
    }*/


/*//Adding EventListner to the Operator                                               
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
}); //Loop through the data-action



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
});*/ 