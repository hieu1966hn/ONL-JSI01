// class PhanSo {

//     constructor(tu, mau) {
//         // super();
//         this.tu = tu;
//         this.mau = mau;
//     }


//     getTu() {
//         return this.tu;
//     }

//     setTu(tu) {
//         this.tu = tu;
//     }


//     getMau() {
//         return this.mau;
//     }

//     setMau(mau) {
//         this.mau = mau;
//     }

//     timUSCLN(a, b) {
//         while (a != b) {
//             if (a > b) {
//                 a -= b;
//             } else {
//                 b -= a;
//             }
//         }
//         return a;
//     }

//     toiGianPhanSo() {
//         let i = timUSCLN(this.getTu(), this.getMau());
//         this.setTu(this.getTu() / i);
//         this.setMau(this.getMau() / i);
//     }

//     congPhanSo(ps) {
//         let ts = this.getTu() * ps.getMau() + ps.getTu() * this.getMau();
//         let ms = this.getMau() * ps.getMau();
//         let phanSoTong = new PhanSo(ts, ms);
//         phanSoTong.toiGianPhanSo();
//         System.out.println("Tổng hai phân số = " + phanSoTong.tu + "/" + phanSoTong.mau);
//     }

// }

// let phanSo1 = new PhanSo(16, 3);
// let phanSo2 = new PhanSo(4, 8);

// console.log(phanSo1.congPhanSo(phanSo2));


// chua btvn



// class Animal {
//     constructor(name){
//         this.name = name;
//     }
// }


// class Rabbit extends Animal{
//     constructor(name){
//        super(name); // kế thừa câu lệnh khởi tạo từ cha: this.name = name;
//         this.created = Date.now();
//     }
// }


// let rabbit = new Rabbit( "white Rabbit");
// console.log(rabbit.name); /// in ra gì:
// console.log(rabbit.created);



// Chữa bài 2:

// class Clock {
//     constructor({ template }) {
//         this.template = template
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) { hours = '0' + hours; }

//         let mins = date.getMinutes();

//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         // let millisecs = date.getMilliseconds(); // lấy ra mili s
//         // if (millisecs < 10) millisecs = '0' + millisecs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs)
//         // .replace('ms', millisecs)
//         console.log(output);

//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// };


// class ExtendedClock extends Clock {
//     constructor({ template }) {
//         super({template});
//     }
//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) { hours = '0' + hours; }

//         let mins = date.getMinutes();

//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let millisecs = date.getMilliseconds(); // lấy ra mili s
//         if (millisecs < 10) millisecs = '0' + millisecs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs)
//             .replace('ms', millisecs)
//         console.log(output);

//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// let clock = new ExtendedClock({ template: 'h:m:s:ms' });
// clock.render()



// let clock = new ExtendedClock({ template: 'h:m:s:ms' });
// clock.start();
// console.log("Use clock.stop() to stop the loop")

//  a/b + c/d = (a*d + c*b)/(b*d)

//Chua bai phan so
class PhanSo {
    constructor(tu, mau) {
        this.tu = tu;
        this.mau = mau;
    }

    getTu() {
        return this.tu;
    }

    getMau() {
        return this.mau
    }

    // timUSCLN(tu,mau) {
    //     while (tu != mau) {
    //         if (tu > mau) {
    //             tu -= mau;
    //         } else {
    //             mau -= tu;
    //         }
    //     }
    //     return tu;
    // }


    congPhanSo(ps2) {
        let ts = Number(this.tu * ps2.getMau() + this.mau * ps2.getTu());
        let ms = this.mau * ps2.getMau();
        return "ket qua cong 2 phan so: " + ts + "/" + ms;
    }

    truPhanSo(ps2) {
        let ts = Number(this.tu * ps2.getMau() - this.mau * ps2.getTu());
        let ms = this.mau * ps2.getMau();
        return "ket qua tru 2 phan so: " + ts + "/" + ms;
    }
}


let phanso1 = new PhanSo(1, 2);
// let phanso2 = new PhanSo(3, 4);
// phanso1.nhapPhanSo();
// phanso2.nhapPhanSo()
// phanso1.congPhanSo();
// console.log("lay ra tu:",phanso1.getTu());
// console.log("lay ra mau:",phanso1.getMau());
// console.log(phanso1.congPhanSo(phanso2));
console.log(phanso1.timUSCLN(4,2));