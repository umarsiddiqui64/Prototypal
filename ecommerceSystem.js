function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function() {
    console.log(`${this.name} - $${this.price}, Quantity: ${this.quantity}`);
};

Product.prototype.sell = function(amount) {
    if (amount <= this.quantity) {
        this.quantity -= amount;
        console.log(`Sold ${amount} of ${this.name}. Remaining: ${this.quantity}`);
    } else {
        console.log(`Insufficient stock for ${this.name}.`);
    }
};

function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);  // Inherit Product properties
    this.brand = brand;
    this.model = model;
}

// Inherit from Product
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Additional methods for Electronics
Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
};

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Additional methods for Clothing
Clothing.prototype.tryOn = function() {
    console.log(`Trying on ${this.name} (Size: ${this.size}).`);
};

function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

Book.prototype.readSample = function() {
    console.log(`Reading sample of "${this.name}" by ${this.author}.`);
};

const laptop = new Electronics("Gaming Laptop", 1500, 10, "Alienware", "X17");
const tshirt = new Clothing("Graphic T-shirt", 25, 50, "L", "Cotton");
const novel = new Book("JavaScript Mastery", 30, 20, "John Doe", "Programming");

// Show details
laptop.getDetails();
tshirt.getDetails();
novel.getDetails();

// Sell products
laptop.sell(2);
tshirt.sell(10);
novel.sell(5);

// Specific methods
laptop.powerOn();
tshirt.tryOn();
novel.readSample();
laptop.powerOff();
