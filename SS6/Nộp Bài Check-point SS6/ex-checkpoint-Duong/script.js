class Student{
    constructor(name,age,hometown){
        this.name = name
        this.age = age
        this.hometown = hometown
    }
}

class School{
    constructor(){
        this.list = []
    }
    inputInfo(n){
        for(let i=0;i<n;i++){
            this.list.push(new Student(prompt(`Enter student number ${i +1 } name`),+prompt(`Enter student number ${i+1} age`),prompt( `Enter student number ${i+1} hometown`)))
        }
    }
    displayInfo(){
        let count = 0
        for(let j of this.list){
            if(j.age ===20){
                document.getElementById("output").innerHTML += `<p style="display: block;">-The student(s) having    the age of 20 is ${j.name}, whose hometown is in ${j.hometown}</p>`
                count++
            }
        }
        if(count ==0){
            document.getElementById("output").innerHTML += `<p style="display: block;">-No student has the age of 20</p>`
            count++
        }
        document.getElementById("output").innerHTML += `<hr width = "70%">`
    }
    displayAnotherInfo(){
        let count = 0
        for(let i of this.list){
            if(i.age == 23 && i.hometown == "Da Nang"){
                document.getElementById("output").innerHTML += `<p style="display: block;">-The student(s) has the age of 23 and the hometown in Da Nang is ${i.name}</p>`
                count++
            }
        }
        if(count ==0){
            document.getElementById("output").innerHTML += `<p style="display: block;">-No student has the age of 23 and the hometown in Da Nang</p>`
        }
        document.getElementById("output").innerHTML += `<p style="display: block;"> => In total, there are ${count} student(s) at the age of 23 and living in Da Nang</p>`

    }
    
}

let sample = new School()
sample.inputInfo(2)
function view(){
    for(let i of sample.list){
        document.getElementById("input").innerHTML += `<p style="display: block;">-Student: ${i.name}, ${i.age} years old, living in ${i.hometown} </p>`
    }
    
}
view()


sample.displayInfo()
sample.displayAnotherInfo()

function addStudent(){
    sample.inputInfo(1)
    document.getElementById("input").innerHTML = ``
    document.getElementById("output").innerHTML = ``
    view()
    sample.displayInfo()
    sample.displayAnotherInfo()
}