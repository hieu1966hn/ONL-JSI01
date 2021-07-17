const cafeList = document.getElementById('cafe-list');
const form = document.querySelector("#add-cafe-form");

function renderCafe(doc) {
    let li = document.createElement("li");
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement("div");
    let update = document.createElement("strong");

    li.setAttribute('data-id', doc.id);
    // luu lai id cua  doc do trong li

    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';
    update.textContent = "update"

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    li.appendChild(update);



    cafeList.appendChild(li)

    // Deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        // giai thich them
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })


    // Updating data
    update.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        let li = cafeList.querySelector(`[data-id=`+id+`]`);
        
        db.collection('cafes').doc(id).update({
            name: prompt("nhập tên mới muốn update"),
            city: prompt("nhập city mới muốn update")
        })
    })
}

// getting data
// db.collection("cafes").get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         // console.log(doc.data());
//         renderCafe(doc);
//     })
// });

// // Lọc dữ liệu mình lấy ra: 
// db.collection("cafes").where('city', "<","Mau").get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//         renderCafe(doc);
//     })
// });


// // ordering data: training again
// db.collection("cafes").where('city', "==","HaNoi").get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//         renderCafe(doc);
//     })
// });


// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value.trim(),
        city: form.city.value.trim(),
    })
    form.name.value = "";
    form.city.value = "";

})

// real-time listener
// Khi có bất kỳ sự thay đổi dl nào trong DB thì onSnapshot sẽ được khởi chạy
db.collection("cafes").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change);
        if (change.type == 'added') {
            renderCafe(change.doc)
        }
        else if (change.type == "removed") {
            let li = cafeList.querySelector(`[data-id=`+change.doc.id+`]`);
            cafeList.removeChild(li);
        }
        else if(change.type == "modified"){
            let li = cafeList.querySelector(`[data-id=`+change.doc.id+`]`);
            console.log(li);
            cafeList.replaceChild(li,)
        }
    })
})