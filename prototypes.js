function Animal() {
    this.type = "Animal";
}

Animal.prototype.sound = function() {
    console.log("Animal sound");
};

function Dog(name) {
    Animal.call(this); 
    this.name = name; 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; 

Dog.prototype.sound = function() {
    console.log("Bark");
};

const myDog = new Dog("Buddy");

myDog.sound(); 

console.log(myDog.type); 
console.log(myDog.name);
console.log(myDog instanceof Dog); 
console.log(myDog instanceof Animal); 
