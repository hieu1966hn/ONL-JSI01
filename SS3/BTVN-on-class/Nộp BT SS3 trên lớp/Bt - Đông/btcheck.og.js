// 1621089923922

class SoHoc {
    #number1;
    #number2;

    constructor(number1, number2) {
        this.#number1 = number1 ?? 0;
        this.#number2 = number2 ?? 0;
    }

    inputInfo(number1, number2) {
        this.#number1 = number1;
        this.#number2 = number2;
    }

    printInfo() {
        console.log("number1:", this.#number1);
        console.log("number2:", this.#number2);
    }

    addition() {
        return this.#number1 + this.#number2;
    }

    subtract() {
        return this.#number1 - this.#number2;
    }

    multi() {
        return this.#number1 * this.#number2;
    }

    division() {
        return this.#number1 / this.#number2;
    }
}