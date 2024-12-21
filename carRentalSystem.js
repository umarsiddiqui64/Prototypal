// Step 1: Car Constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = true;  // Default availability
}

// Step 2: Customer Constructor
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Step 3: Rent a Car Method
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

// Step 4: Return a Car Method (Simulates Delay)
Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter(c => c !== car);
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000);  // 2-second delay
};

// Step 5: PremiumCustomer Inherits from Customer
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);  // Inherit properties
    this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Step 6: Calculate Rental Price
function calculateRentalPrice(carType, days, customer) {
    const baseRate = 50;
    let rateMultiplier = 1;

    if (carType === "SUV") rateMultiplier = 1.5;
    else if (carType === "Sedan") rateMultiplier = 1.2;

    let total = baseRate * rateMultiplier * days;

    // Apply discount for premium customers
    if (customer instanceof PremiumCustomer) {
        total -= total * customer.discountRate;
    }

    console.log(`Total rental price for ${days} days: $${total.toFixed(2)}`);
    return total;
}

// Step 7: Maintenance Function (Async Handling)
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Maintenance complete: ${car.make} ${car.model} is now available.`);
    }, delay);
}

// Step 8: Demonstration
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "CR-V", 2021);
const car3 = new Car("Ford", "Explorer", 2020);

const customer1 = new Customer("John Doe");
const premiumCustomer = new PremiumCustomer("Jane Smith", 0.1);  // 10% discount

// Rent Cars
customer1.rentCar(car1);
premiumCustomer.rentCar(car2);

// Try Renting an Already Rented Car
customer1.rentCar(car1);

// Return Car (Simulated Delay)
customer1.returnCar(car1);

// Calculate Rental Price
calculateRentalPrice("SUV", 5, premiumCustomer);

// Perform Maintenance
Maintenance(car3, 3000);  // 3-second delay
