class Candidate {
    constructor(maso,name,date,toan,van,anh){
        this.maso = maso;
        this.name =name;
        this.date = date;
        this.toan = toan;
        this.van = van;
        this.anh = anh;
    }
    masoThisinh(){
        return this.maso;
    }
    nameThisinh(){
        return this.name;
    }
    dateThisinh(){
        return this.date;
    }
    diemToan(){
        return this.toan;
    }
    diemVan(){
        return this.van;
    }
    diemAnh(){
        return this.anh
    }
 }
 
 
 let candidate = new Candidate(1,"Thành",2007,9,7,9)
 if(this.toan + this.van + this.anh > 15){
    console.log("Mã số học sinh: ", candidate.masoThisinh());
    console.log("Tên: ", candidate.nameThisinh())
    console.log("Năm sinh: ", candidate.dateThisinh())
    console.log("Điểm Toán là: ", candidate.diemToan())
    console.log("Điểm Văn là: ", candidate.diemVan())
    console.log("Điểm Anh là: ", candidate.diemAnh())
 }
 // let soLuong = prompt("Nhập số học sinh: ")
 // em chịu phần này
 
 