let controller = {}
let table = document.getElementById("display")

controller.CREATE = (data) => {
    table.innerHTML = table.innerHTML + `
    <table>
        <tr id = "` + data.name + `">
            <th name = "name">`+ data.name +`</th>
            <th name = "age">`+ data.age +`</th>
            <th name = "course">`+ data.course +`</th>
        </tr>
    </table>
    `
    // các table tự động gộp, chuyển thành table body
}

controller.DELETE = (data) => {
    let target = document.getElementById(data)
    if (target==null){
        alert("No user found")
    }
    else{
        target.innerHTML = ``
    }
    
}

controller.SEARCH = (data) => {
    let target = document.getElementById(data)
    if (target==null){
        alert("No user found")
    }
    else{
        target.style = "background-color: yellow"
    }
    
}

controller.UPDATE = (data) => {
    let target = document.getElementById(data)
    if (target==null){
        alert("No user found")
        
    }
    else{
        target.innerHTML = ``
        let data = {
            name: prompt("Enter username you want to update"),
            age: prompt("Enter age you want to update"),
            course: fillCourse()
        }
        function fillCourse(){
            let numberofCourse = prompt("Enter the number of course (maximum of 3)")
            let course = []
            for(i=0;i<numberofCourse;i++){
                course.push(prompt("Enter the " + (i+1) + "th course"))
            }
            return course
        }
        
        controller.CREATE(data)
    }

}

console.log("Hi");