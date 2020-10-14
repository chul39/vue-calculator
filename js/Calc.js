class Calc{

    // Constructor
    constructor(){
        this.prevVal = null;
        this.currentVal = "";
        this.operator = null;
        this.isOperatorClicked = false;
    }

    // Clear the current value
    clear() {
        this.currentVal = "";
    }

    // Invert the sign of the current value
    invertVal(){
        this.currentVal = this.currentVal.charAt(0) === "-" ? this.currentVal.slice(1) : `-${this.currentVal}`;
    }

    // Convert the current value to a percent
    toPercent(){
        this.currentVal = `${parseFloat(this.currentVal) / 100}`;
    }

    // Append the input value to the current value
    append(input){
        if(this.isOperatorClicked){
            this.currentVal = "";
            this.isOperatorClicked = false;
        }
        this.currentVal = `${this.currentVal}${input}`
    }

    // Check for decimal point and append it
    appendDot(){
        if (this.currentVal.indexOf('.') === -1) {
            this.append('.');
          }
    }

    // Set the value of variable prevVal
    setPrevVal(){
        this.prevVal = this.currentVal;
        this.isOperatorClicked = true;
    }

    // Addition
    add(){
        this.operator = (a,b) => a+b;
        this.setPrevVal();
    }

    // Subtraction
    subtract(){
        this.operator = (a,b) => a-b;
        this.setPrevVal();
    }
    
    // Multiplication
    multiply(){
        this.operator = (a,b) => a*b;
        this.setPrevVal();
    }
    
    // Division
    divide(){
        this.operator = (a,b) => a/b;
        this.setPrevVal();
    }

    // Get the result of the calculation
    getResult(){
        if(this.prevVal){
            this.currentVal = `${this.operator(parseFloat(this.prevVal), parseFloat(this.currentVal))}`;
            this.prevVal = null;
        }
    }

}