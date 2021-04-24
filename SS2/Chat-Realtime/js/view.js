const view = {};

view.setActiveScreen = (screen) => {
    switch (screen){
        case 'homeScreen':
            document.getElementById("app").innerHTML = components.homeScreen;
            break;
    }
}
console.log(view);