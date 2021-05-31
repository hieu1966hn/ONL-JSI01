class Animal {
    constructor(name){
        this.name = name;
        this.created = Date.now();
    }
}
class Rabbit extends Animal {
  
}
let rabbit = new Rabbit("white rabbit");
alert(rabbit.name)