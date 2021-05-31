//Bai 1
class Animal{
    constructor(name){
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor(name){
        super(name)
        this.created = Date.now()
    }
}

let rabbit = new Rabbit ("White Rabbit")


//Bai 2
// class ExtendedClock{
//     constructor({template}) {
//         this.template = template
//     }
//     render(){
//         let date = new Date();
        
//         let hours = date.getHours();
//         if (hours < 10){hours = '0' + hours; } 

//         let mins = date.getMinutes();

//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let millisecs = date.getMilliseconds();

//         if (millisecs < 1000) millisecs = '0' + millisecs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs)
//             .replace('ms', millisecs);
//         console.log(output);

//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
// };
//     let clock = new ExtendedClock({template: 'h:m:s:ms'});
//     clock.start();
//     console.log("Use clock.stop() to stop the loop")
//Bai3

class PhanSo{
   
    inputInfo(){
        let tuso1 = prompt("Nhap vao tu so thu nhat")
        let mauso1 = prompt("Nhap vao mau so thu nhat")

        let tuso2 = prompt("Nhap vao tu so thu hai")
        let mauso2 = prompt("Nhap vao mau so thu hai")

        this.phanso1 = Fraction(tuso1,mauso1)
        this.phanso2 = Fraction(tuso2,mauso2)
    }
    display(){
        console.log("Phan so 1: " + this.phanso1.n + "/" + this.phanso1.d)
        console.log("Phan so 2: " + this.phanso2.n + "/" + this.phanso2.d)
    }
    add(){
        let sum = this.phanso1.add(this.phanso2)
        return ("Tong hai phan so la: " + sum.n + '/' + sum.d )
    }
    subtract(){
        let subtraction = this.phanso1.sub(this.phanso2)
        return ("Hieu hai phan so la: " + subtraction.n + '/' + subtraction.d )
    }
    multiply(){
        let multiplication = this.phanso1.mul(this.phanso2)
        return ("Tich hai phan so la: " + multiplication.n + '/' + multiplication.d )
    }
    divide(){
        let division = this.phanso1.div(this.phanso2)
        return ("Thuong hai phan so la: " + division.n + "/" + division.d)
    }
}

let sample = new PhanSo()
sample.inputInfo()
sample.display()
console.log(sample.add());
console.log(sample.subtract())
console.log(sample.multiply())
console.log(sample.divide())

