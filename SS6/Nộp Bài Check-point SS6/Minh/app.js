class School {
    constructor(names,classes,yearsold,address) {
  
        this.names = names;
        this.classes = classes;
        this.yearsold = yearsold;
        this.address = address;
        

    }

  
}

j = 0
class HocSinh extends School{
    constructor(names,classes,yearsold,address){
        super(names,classes,yearsold,address);
    
    }

    

    infomation(){
    
        if (this.yearsold >20 ){
            console.log('Hoc sinh hon 20 tuoi va que o da nang la');
            console.log(`Ten cua hoc sinh: ${this.names}, `)
            console.log(`Lop cua hoc sinh: ${this.classes}, `)
            console.log(`Tuoi cua hoc sinh: ${this.yearsold},  `);
            console.log(`Que cua hoc sinh: ${this.address},`);
      

        }
        if (this.yearsold >20 && this.address == "da nang"){
            j = j + 1
        }
        
    }
    
}
let soLuongHocSinh = prompt("ban muon bao nhieu hoc sinh")

let hocSinh = []

for (i=0; i < soLuongHocSinh;i++){  
    hocSinh.push(new HocSinh(prompt("Ten hoc sinh: "),prompt("Lop hoc sinh: "),prompt("Tuoi hoc sinh: ").toLowerCase(),prompt("Que hoc sinh: ")))
    console.log(hocSinh[i].infomation())
}

console.log('Số học sinh có quê ở dà nẵng và hơn 20 tuổi là: ',j)


