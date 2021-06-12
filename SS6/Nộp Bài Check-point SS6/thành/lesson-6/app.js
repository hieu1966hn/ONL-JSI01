

class School {
  constructor(names,age,address,classStudent) {
      this.names = names;
      this.age = age;
      this.classStudent = classStudent;
      this.address = address;
}
}

class Student extends School{
  constructor(names,age,classStudent,address){
      super(names,age,classStudent,address);
  
  }
  addNew(){
    this.name = prompt("Nhập tên học sinh: ")
    this.age = prompt("Nhập tuổi của học sinh")
    this.address = prompt("Nhập địa chỉ học sinh: ")
    this.classStudent = prompt("Nhập lớp của học sinh: ")
  }
  print(){
    console.log(`Học sinh ${this.name} , ${this.age} tuổi, lớp ${this.classStudent}  địa chỉ ${this.address}`);
  }

  info(){
      if (this.age >20 && this.address == "Da nang"){
          console.log(`Ten hoc sinh: ${this.names} `,`tuổi ${this.age} `,` Lớp ${this.classStudent}`,`Dia chi cua hoc sinh: ${this.address}`)
      } 
  }
}

let hs = new Student
let hocsinh1 = new Student("Thành",14,"8a","Khu Cháy")
let hocsinh2 = new Student("Hiếu PC",25,"13","Da nang")

hs.addNew()
hs.print()
console.log(hocsinh1.info())
console.log(hocsinh2.info())




