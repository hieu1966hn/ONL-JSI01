class SoHoc{
    constructor(){
        
    }
    inputInfo(){
        let n1 = Number(prompt("Enter first number."))
        let n2 = Number(prompt("Enter second number"))
        this.number1 = n1
        this.number2 = n2
    }
    printInfo(){
        console.log("First number is", this.number1);
        console.log("Second number is", this.number2)
    }
    addition(){
        return (this.number1 + this.number2)
    }
    subtract(){
        return this.number1 - this.number2
    }
    multi(){
        return this.number1 * this.number2
    }
    division(){
        if (this.number2 !== 0){
            return this.number1/this.number2
        }
        else{
            return "Error!! Can't devide by 0 (Zero)"
        }
    }

}

let Ispum = new SoHoc
Ispum.inputInfo()
Ispum.printInfo()
console.log("Sum: ",Ispum.addition());
console.log("Subtraction: ",Ispum.subtract());
console.log("Multiplication: ",Ispum.multi());
console.log("Division: ",Ispum.division());
