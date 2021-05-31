class SoHoc{
    constructor(){
        
    }
    inputInfo(){
        let a = Number(prompt("Nhập số đầu tiên"))
        let b = Number(prompt("Nhập số thứ hai"))
        this.number1 = a
        this.number2 = b
    }
    printInfo(){
        console.log("First number :", this.number1);
        console.log("Second number :", this.number2)
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

let Ipsum = new SoHoc
Ipsum.inputInfo()
Ipsum.printInfo()
console.log("Sum: ",Ipsum.addition());
console.log("Subtraction: ",Ipsum.subtract());
console.log("Multiplication: ",Ipsum.multi());
console.log("Division: ",Ipsum.division());