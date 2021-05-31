class Candidate{
    constructor(id,name,year,M_point,L_point,E_point){
        this.id = id
        this.name = name
        this.year = year
        this.M_point = M_point
        this.L_point = L_point
        this.E_point = E_point
    }
    checkCandidate(){
        if((this.M_point + this.L_point + this.E_point) > 15){
            return true
        }
        else {return false}
    }
}

class TestCandidate{
    constructor(){
        this.input = []
        this.output = []
    }
    fillCandidate(){
        let n = prompt("enter the number of candidates")
        for (let index = 0; index < n; index++) {
            this.input.push(new Candidate(
                prompt("type in candidate's id" + " number " + (index+1)),
                prompt("type in candidate's name" + " number " + (index+1)),
                prompt("type in candidate's year of birth" + " number " + (index+1)),
                +prompt("type in candidate's Math point" + " number " + (index+1)),
                +prompt("type in candidate's Literature point" + " number " + (index+1)),
                +prompt("type in candidate's English point" + " number " + (index+1)))
                )
        }
    }
    getPassedCandidate(){
        for(let i of this.input){
            if(i.checkCandidate() == true){
                this.output.push(i)
            }
        }
    }
    
}

let sample = new TestCandidate([])
sample.fillCandidate()
sample.getPassedCandidate()
console.log(sample);