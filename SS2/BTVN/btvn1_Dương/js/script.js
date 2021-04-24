function addUser(){
    let data = {
        name: prompt("Enter username"),
        age: prompt("Enter age"),
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

function deleteUser(){
    let search = prompt("Enter username which you want to delete")
    controller.DELETE(search)
}

function searchUser(){
    let search = prompt("Enter username which you want to search")
    controller.SEARCH(search)
}

function updateUser(){
    let search = prompt("Enter username which you want to update")
    controller.UPDATE(search)

}