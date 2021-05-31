class SoHoc {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    inputInfo() {
        let so1 = Number(prompt("Nhập số 1: "))
        let so2 = Number(prompt("Nhập số 2:  "))
        this.number1 = so1;
        this.number2 = so2;
    }
    printInfo() {
        console.log("số thứ nhất là: " + this.number1)
        console.log("số thứ hai là: " + this.number2)
    }
    addition() {
        return this.number1 + this.number2
    }
    subtraction() {
        return this.number1 - this.number2
    }
    multi() {
        return this.number1 * this.number2
    }
    division() {
        if (this.number2 !== 0) {
            return this.number1 / this.number2
        } else {
            console.log("Không chia được cho 0")
        }
    }
}
let pheptinh = new SoHoc
pheptinh.inputInfo()
pheptinh.printInfo()
console.log("Subtraction ", pheptinh.subtraction());
console.log("Sum: ", pheptinh.addition());
console.log("Multiplication: ", pheptinh.multi());
console.log("Division: ", pheptinh.division());
