// /**
//  * Class -> Object  
//  *  -   Tính Đa hình: 
//  *  -   Tính Đóng gói:
//  *  -   Tính kế thừa: 
//  *  -   Tính Trừu tượng: 
//  * 
//  * 
//  * Instance Properties: what they have
//  *  - name
//  *  - age
//  *  - height
//  * 
//  * Intance Methods: what they do:
//  *  - Talk
//  *  - Run
//  *  - Jump
//  */


// class Rectangle {
//     // Set up
//     constructor(_width, _height, _color) {// chi chay khi moi khi dc class nay dc khoi tao, Chỉ chạy duy nhất 1 lần đó.
//         console.log("The Rectangle is being created"); // chay khong?

//         this.width = _width; // khởi tạo ép giá trị
//         this.height = _height;
//         this.color = _color;
//     }

//     // lay gia tri
//     getArea() { // method
//         return this.width * this.height;
//     }

//     printDescription(){ // method
//         console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
//     }
// }
// let myRectangle1 = new Rectangle(3, 5, "Green"); // vua khoi tao xong
// let myRectangle2 = new Rectangle(10, 5, "Pink"); // vua khoi tao xong
// console.log("S myRetangle1: ", myRectangle1.getArea());
// console.log("S myRetangle2: ", myRectangle2.getArea());


// myRectangle1.printDescription(); // xem no ra gi nhe
// myRectangle2.printDescription(); // xem no ra gi nhe
// //  xong phan basic ve classs



/////////////////////// getter && setter trong js

// class Square { // get and set la phuong thuc default cua class
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//         this.numberOfRequestsForArea = 0;
//     }


//     get area() {
//         this.numberOfRequestsForArea++;
//         return this.width * this.height;
//     }

//     set area(area) { // minh phai truyen vao bien
//         this.width = 1;
//         this.height = this.width;
//     }

// }

// let square1 = new Square(5);
// console.log(square1.width);
// console.log(square1.height);

// console.log(square1.area); // in ra gi??
// console.log(square1.area); // in ra gi??
// console.log(square1.area); // in ra gi??
// console.log(square1.area); // in ra gi??

// console.log(square1.numberOfRequestsForArea); // in ra gi??? 4




/////// static methos in JS Classs

// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//     }


//     static equals(a, b) { //a,b la 2 hinh dc truyen vao
//         // trong nay khong ton tai tu khoa: this
//         return a.width * a.height === b.width * b.height
//     }


//     static isValidDimensions(width, height) { // kiem tra hinh nay co phai la hinh Square hay khong
//         return width === height; // true
//     }
// }


// let square1 = new Square(5); /// buoc dau tien khoi tao
// console.log(square1);

// let square2 = new Square(5);
// console.log(square2);


// console.log(Square.equals(square1, square2)); /// ?

// console.log(Square.isValidDimensions(square1.width, square1.height)); // in ra gi nhi?



//////// Parent and child Class: Extends

// class Person { // clas cha && hay con goi la kieu dl Person
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     describe() {
//         console.log(`I am ${this.name} and I am ${this.age} years old`);
//     }

// }

// class Programmer extends Person {
//     constructor(_name, _age, _yearsOfExperience) {
//         super(_name, _age);// ke thua thanh cong 2 bien name and age

//         // custom behaviour
//         this.yearsOfExperience = _yearsOfExperience;
//     }

//     describe() {
//         console.log(`I am ${this.name} and I am ${this.age} years old and I have ${this.yearsOfExperience} years of Experience`);

//     }

//     code() {
//         console.log(`${this.name} is coding`);
//     }
// }


// let person1 = new Person("Jeff", 45);
// // let Hieu = new Programmer("Hieu", 70, 50);

// // console.log(person1);
// // Hieu.code();
// // Hieu.describe()

// const programmers = [
//     new Programmer("Duong", 36, 10),
//     new Programmer("Dong", 46, 5),
//     new Programmer("Hung", 50, 25),
//     new Programmer("Minh", 30, 25),
//     new Programmer("Thanh", 60, 20),
// ]

// function developSoftware(programmers) {
//     // Develop software

//     for (let programmer of programmers) {
//         console.log(programmer); // in ra thong tin 5 nguoi do
//         programmer.code();  // in ra ho dang lam gi
//         programmer.describe(); // in ra mo ta chi tiet ve ho
//     }
// }

// developSoftware(programmers);


//// Polymorphism (Trừu tượng)


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log("Generic Animal sound!!");
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }

//     makeSound(){
//         super.makeSound(); // ke thua phuong thuc va them bot thong tin (noi dung)
//         console.log("Woof! Woof!");
//     }
// }


// const a1 = new Animal("Duong");
// const a2 = new Dog('John');
// // a1.makeSound();
// a2.makeSound(); // in ra gi?????



