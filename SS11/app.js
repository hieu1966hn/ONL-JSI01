const cafeList = document.getElementById('cafe-list');
const form = document.querySelector("#add-cafe-form");

function renderCafe(doc) {
    let li = document.createElement("li");
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement("div");

    li.setAttribute('data-id', doc.id);
    // luu lai id cua  doc do trong li

    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);


    cafeList.appendChild(li)

    // Deleting data
    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        // giai thich them
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })
}

// getting data
db.collection("cafes").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderCafe(doc);
    })
});


// saving data
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value.trim(),
        city: form.city.value.trim(),
    })
    form.name.value="";
    form.city.value="";

})

// 