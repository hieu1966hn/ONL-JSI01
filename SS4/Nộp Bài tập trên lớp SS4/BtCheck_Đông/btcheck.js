class Candidate {
    constructor(mã, tên, nămsinh, Toán, Văn, Anh ) {
        this.mã = mã;
        this.tên = tên;
        this.nămsinh = nămsinh;
        this.Toán = Toán;
        this.Văn = Văn;
        this.Anh = Anh;
    }

}

class TestCandidate {
    /**
     * @param {Candidate} candidate 
     */
    static check(candidate) {
        if (candidate.Toán + candidate.Văn + candidate.Anh > 15) {
            console.log("Mã số học sinh:", candidate.mã);
            console.log("Tên học sinh:", candidate.tên);
            console.log("Năm sinh:" , candidate.nămsinh);
            console.log("Điểm thi 3 môn :", "Toán:", candidate.Toán, "Văn:", candidate.Văn, "Anh:", candidate.Anh);
        }
    }
}

let Số_Lượng = +prompt("Nhập số lượng học sinh:");
let candidates = [];
for (let i = 1; i <= Số_Lượng; i++) {
    candidates.push(new Candidate(
        +prompt ("Mã học sinh thứ " + i) ,
        prompt ("Tên học sinh thứ " + i) ,
        +prompt ("Năm sinh của học sinh thứ " + i) ,
        +prompt ("Điểm Toán của học sinh thứ " + i),
        +prompt ("Điểm Văn của học sinh thứ " + i),
        +prompt ("Điểm Anh của học sinh thứ" + i),
    ));
}

candidates.forEach(candidate => TestCandidate.check(candidate));
