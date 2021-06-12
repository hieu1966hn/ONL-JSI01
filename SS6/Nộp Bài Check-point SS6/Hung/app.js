class People{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class Students extends People{
    constructor(name,age,id,math,physics,chemistry){
        super(name,age)
        this.id = id
        this.math = math
        this.physics = physics
        this.chemistry = chemistry
    }
    
    GPA(){
        return (this.math + this.physics + this.chemistry) / 3
    }
}
let Student = new Students(  prompt("Enter student's name"),
prompt("Enter student's age"),
prompt("Enter id"),
+prompt("Enter Math "),
+prompt("Enter Physics "),
+prompt("Enter Chemistry "))
console.log(Student.name);
console.log(Student.age)
console.log(Student.id);
console.log(Student.math);
console.log(Student.physics);
console.log(Student.chemistry);
console.log(Student.GPA());