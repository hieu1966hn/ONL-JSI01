class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [
            // 'dcode',"bottle"
        ]
    }

    // Makes an  <li>text</li> element/tag
    static createListItem(text) {
        const li = document.createElement('li');

        li.textContent = text;

        return li;
    }


    update() {
        //  Remove all existing <li>
        while (this.listElement.firstChild) { // neu ton tai con dau tien cua listBinding
            this.listElement.removeChild(this.listElement.firstChild);
        }


        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }


    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }
}