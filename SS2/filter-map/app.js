

// filter: loc dl
// C1
// for(let i =0;i<arr.length;i++){
//     if(arr[i]>3){
//         console.log(arr[i]);
//     }
// }

// C2: for of : su dung khi can duyet mang
// for(let i of arr ){
//     if(i>3){
//         console.log(i);
//     }
// }


// C3: for in: duyet object
// for(let i in arr){
//     console.log(i);
// }


// C4: filter
// console.log(arr);
// console.log(arr.filter((index) => index > 3))

let arr = [1, 2, 3, 4, 5, 6];
//// tim trong mang da cho: nếu như có tồn tại số 6 => in ra vị trí của nó trong mảng
// console.log("phan tu so 6 nam o vi tri so:", arr.indexOf(8,0));
// nếu tồn tại phần tử => in ra vị trí nó
// nếu khong tồn tại phần tử => -1




/// map: thực hiện cùng 1 hàm hành động với từng phần tử của mảng.
let temp = arr.map((x)=>{return x*2});
console.log(temp);