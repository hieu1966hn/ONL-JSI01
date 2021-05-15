/* 
*** 4 tính chất của hướng đối tượng
    -   Đa Hình
    -   Kế thừa
    -   Đóng gói
    -   Trừu tượng
1. Khởi tạo class trong javascript
2. Thuộc tính của đối tượng trong Javascript
3. Kế thừa trong Javascript
    3.1 Kế thừa hoàn toàn class cha
    3.2 Kế thừa và ghi đè phương thức constructor của cha
    3.3 Kế thừa và ghi đè phương thức thường của class cha
4. Sử dụng abstract class trong Javascript (Advance)
5. Sử dụng interface trong Javascript
6. Tổng kết

*/

// function sum(a,b){ // this is function
//     return a+b;
// }

// const sum = (a,b)=> a+b;// this is function in ES6

// const input  = prompt("nhap"); // String
// input = Number(input); // ép kiểu biến input => kiêu dl Number


/// 1.Khởi tạo class trong javascript (done)
// class Person{ // khai báo lớp
//    say(){ // phương thức
//        return "Hello world"
//    }

// }

// let me = new Person();// Khởi tạo và ép kiểu cho biến me => kiểu lớp Person
// console.log(me.say());


// 2. Thuộc tính của đối tượng trong Javascript
// class Person { // khai báo lớp
//     // khai bao thuoc tinh
//     constructor(name,age){ // constructor là 1 phương thức khởi tạo mặc định của Lớp
//         this.name = name;// WHAT IS "THIS"
//         this.age = age;
//     }

//     say() { // phương thức
//         return "My name is "+ this.name
//     }

// }

// let me = new Person("Hiếu",18);
// console.log(me.say()); // in ra gì
// console.log(me.name); // name: là thuộc tính đã khởi tạo. this == me;
// console.log(me.age); 

/**
 * Đoạn code trên là ta đang gán giá trị cho thuộc tính "name" với giá trị name được 
 * truyền vào thông qua hàm constructor. Vậy câu hỏi đặt ra là thuộc tính name này 
 * nó là "public", "privated", "protected". (Tính ĐÓNG GÓI)
 * 
 * -> Trả lời là public. JS chưa hỗ trợ đầy đủ các thuộc tính đóng gói => mặc định 
 * sẽ luôn là public => mọi thuộc tính đối tượng đều có thể truy suất từ bên ngoài 
 * nếu biết chính xác tên thuộc tính là 
 */

// 3. Tính kế thừa (important)
// xet VD sau:
////3.1 kế thừa hoàn toàn

// class Person { // Khoi tao lop nguoi
//     constructor(name) {
//         this.name = name;
//     }


//     say() {
//         return "I am Ironman!!" + " my name is " + this.name
//     }
// }

// class Student extends Person {
// // không hề có 1 dòng code. Nhưng nó đã kế thừa toàn bộ các thuộc tính "name" 
// // và phương thức say() của lớp Person
// }

// let me = new Student('Hiếu'); // khoi tao 1 lop student
// console.log("ten cua hoc sinh la: ", me.name);
// console.log(me.say());


////3.2 Kế thừa và ghi đè phương thức constructor của cha
// class Person { // Khoi tao lop nguoi
//     constructor(name) {
//         this.name = name;

//     }

//     say() {
//         return "I am Person!!" + " my name is " + this.name
//     }
// }

// class Student extends Person {
//     constructor(name, age) {
//         super(name); // ke thừa nhung gi da khoi tao
//         this.age = age; // khai bao moi

//     }
// }

// let me = new Student("Hieu", 18);
// console.log(me.name, "va tuoi la: ", me.age);// in ra gi??

/** Lưu ý:
 *      Thứ 1: Nếu như trong class không khai báo 1 phương thức constructor thì
 * => mặc định luôn có 1 constructor với thân hàm rỗng. Vì thế trong bất kì trường hợp nào
 * nếu muốn ghi đè phương thức constructor ở class cha thì vẫn phải gọi hàm super();
 
 *      Thứ 2: Hàm super() phải được gọi trước khi bạn động tới "this" trong thân hàm,
    nếu không sẽ bị lỗi tham chiếu tới class cha
 * 
    (Kiến thức phỏng vấn chuyên sâu: class trong JS)
 */


// 3.3 Kế thừa và ghi đè phương thức thường của class cha:

// class Person { // Khoi tao lop nguoi
//     constructor(name) {
//         this.name = name;

//     }

//     say() {
//         return "I am Person!!" + " my name is " + this.name
//     }
// }
// class Student extends Person {
//     constructor(name, code) {
//         super(name);
//         this.code = code;
//     }
//     say() {
//         // super.say(); // kế thừa phương thức. /// => trả về String
//         return super.say()+ "\n\n" + "I am Person!!" + " my code is " + this.code // => sửa phương thức => chỉ cần viết lại phương thức
//     }
// }
// let me = new Student("Hiếu", "ONL-JSI");
// console.log(me.name);
// console.log(me.code);
// console.log(me.say());

///// Khoan đã: Nếu muốn ghi đè, nhưng vẫn thực hiện logic ở "Phương thức class Cha" thì làm thế nào?

// 4. Sử dụng abstract class trong JS


class SoHoc {
    constructor(number1, number2) {
        this.number1 = 0;
        this.number2 = 1;

    }
}


