class HocSinh {
    constructor(ten, tuoi, que_quan) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.que_quan = que_quan;
    }

    toHTML() {
        return `<tr><td>${this.ten}</td><td>${this.tuoi}</td><td>${this.que_quan}</td></tr>`
    }
}

class School {
    constructor() { }

    students = []
    prompt() {
        let So_Luong = +prompt("Nhập Số Lượng Học Sinh:");
        for (let i = 0; i < So_Luong; i++) {
            this.students.push(new HocSinh(
                prompt(`Tên của học sinh thứ ${i + 1}`),
                +prompt(`Tuổi của học sinh thứ ${i + 1}`),
                prompt(`Quê quán của học sinh thứ ${i + 1}`)
            ));
        }
    }

    printInFo(dom, filter) {
        dom.innerHTML = this.students.filter(typeof filter === "function" ? filter : () => true).map(student => student.toHTML()).join("");

    }

    AddStudent() {
        this.students.push(new HocSinh(
            prompt("Tên của học sinh ?"),
            +prompt("Tuổi của học sinh ?"),
            prompt("Quê quán của học sinh ?")
        ));
    }

}

let school = new School();
school.prompt();
school.printInFo(document.querySelector("tbody"));

window.AddStudent = function AddStudent() {
    school.AddStudent();
    school.printInFo(document.querySelector("tbody"));
}

window.ShowStudent20 = function ShowStudent20() {
    school.printInFo(document.querySelector("tbody"), student => student.tuoi === 20);
}

window.ShowStudent23 = function ShowStudent23() {
    alert(school.students.filter(student => student.tuoi === 23 && student.que_quan === "DN").length);
}