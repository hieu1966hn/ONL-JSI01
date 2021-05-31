// // // /*
// // // Class -> Object

// // // Instance  Properties: what they have
// // //     -   name
// // //     -   age
// // //     -   height

// // // Instance Methods: what they do
// // //     -   talk
// // //     -   run
// // //     -   jump

// // //  */

// // // class Retangle {
// // //     constructor(_width, _height, _color) { // chi chay 1 lan trong vong doi cua class: vong doi khoi tao (va se chi chay khi class dc khoi tao)
// // //         // set up your object
// // //         console.log("The Retangle is being create");
// // //         this.width = _width;
// // //         // this. The object which is being created by that class
// // //         this.height = _height;
// // //         this.color = _color;

// // //     }

// // //     getArea() {
// // //         return this.width * this.height;
// // //     }

// // //     printDescription() {
// // //         console.log(`I am a retangle of ${this.width} x ${this.height} and I am ${this.color}`);
// // //     }
// // // }

// // // let myRetangle1 = new Retangle(5, 3, "blue"); // dau ngoac de call toi ham constructor
// // // let myRetangle2 = new Retangle(10, 5, "red"); // dau ngoac de call toi ham constructor

// // // console.log(myRetangle1.getArea());
// // // console.log(myRetangle2.getArea());
// // // myRetangle2.printDescription(); 




// // /////////////////////// //  Getter and setter: method of that class

// // class Square {
// //     constructor(_width) {
// //         this.width = _width;
// //         this.height = _width;
// //         this.numberOfRequestsForArea = 0;
// //     }

// //     get area() {
// //         this.numberOfRequestsForArea++;
// //         return this.width * this.height;
// //     }

// //     set area(area) { //area = 25
// //         this.width = Math.sqrt(area);
// //         this.height = this.width;
// //     }
// // }

// // let square1 = new Square(4);
// // // console.log(square1.area);

// // square1.area = 25

// // console.log(square1.area);
// // // console.log(square1.width);
// // // console.log(square1.height);

// // console.log(square1.area);
// // console.log(square1.area);
// // console.log(square1.area);


// // console.log(square1.numberOfRequestsForArea);



// // /////// static class method 

// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;

//     }

//     static equals(a, b) { /// a, b is another class && static method doesn't needd this. bla bla
//         return a.width * a.height === b.width * b.height; // so sanh 2 hinh co bang nhau hay khong
//     }

//     static isValidDimensions(width, height) {
//         return width === height;
//     }
// }

// let square1 = new Square(8);
// let square2 = new Square(9);

// // console.log(square1);
// console.log(Square.equals(square1, square2)); // try it to seee
// console.log(Square.isValidDimensions(6,7));





/////////////// inherit and extends

// Parent and Child class
