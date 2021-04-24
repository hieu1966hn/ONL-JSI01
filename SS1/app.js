let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }, // 4 phần tử mang kiểu dl object
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
];
// console.log(typeof student[0]); // xem kieu du lieu minh muon => object
// // muon xem 1 bien co phai la Array hay khong ta dung cu phap
// console.log(Array.isArray(student[0])); // true => do la 1 Array && false thi nguoc lai

// const findAge = prompt('người dùng nhập vào độ tuổi cần tìm'); // 16
// let dem = 0;
// for (let i = 0; i < student.length; i++) {
//     if (student[i].age == findAge) {
//         console.log(student[i].name);
//         dem++; // da tim dc it nhat 1 nguoi
//     }
// }

// if (dem === 0){
//     console.log("khong tim thay nguoi dung co tuoi da nhap"); // => dem >0 => bo khong chay cau lenh nay
// }


/* Hãy tạo một prompt với câu hỏi: “Khóa học cần tìm ?”.
Khi nhập vào mã khóa học(VD: mindX 02)
=> sẽ hiển thị ra màn hình tên tất cả những người học khóa đó.
Nếu khóa học không có, hiển thị: “Chưa có lớp học này!”. 
*/

const mindxCourse = prompt("nhap vao khoa hoc");
// neu nguoi dung nhap thua dau space o dau hoac cuoi => se bi tu dong bo di

// let course = [];
for (let i of student) {
    if (i.course.indexOf(mindxCourse, 0) != (-1)) {
        console.log(i.name);
    }
}




//////////////////////// Bai 2:


// let arr1 = [0, 2, 4, 6, 8];
// let arr2 = [1, 3, 5, 7];

//a) Duyệt 2 array trên và hiển thị ra màn hình những số lớn hơn 3.

// let arr3 = [...arr1]; // cu phap [...arr1] trong ES6: hieu la copy toan bo phan tu trong mang arr1 do
// arr3 = arr3.concat(arr2); // concat la gan mang ben trong () vao cuoi mang duoc gan.
// // khai bao bien arr3: La 1 Array chua 2 mang arr1 && arr2;
// // console.log(arr3); //  [0, 2, 4, 6, 8, 1, 3, 5, 7]


// // for(let i of arr3){ // cu phap viet gon: for of  (dung de duyet Array rat tot)
// //     // console.log(i); //i hieu la phan tu cua mang moi duyet qua
// //     if(i >3){
// //         // console.log("i",i); // xong cau a) nhe
// //     }
// // }

// // b) Ghép 2 array kể trên lại thành 1 arry như sau: [0,2,4,6,8,1,3,5,7] DONE

// // console.log(arr3); // done luon roi nhe

// // c) Ghép 2 array kể trên lại thành 1 arry như sau: [0,1,2,3,4,5,6,7,8]

// console.log("mang tang dan", arr3.sort((a, b) => a- b)); // sap xep tang dan
// //// tim hieu ve ma ASCII va cu phap sort trong JS.












