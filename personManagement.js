// Step 1: Create the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add introduce method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call Person constructor to inherit name and age
    this.jobTitle = jobTitle;
}

// Step 4: Inherit from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Reset constructor to Employee

// Step 5: Add work method to Employee.prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Step 6: Testing the implementation
const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 40, "Software Engineer");

// Call introduce on both instances
person1.introduce();  // Output: Hi, my name is Alice and I am 30 years old.
employee1.introduce(); // Output: Hi, my name is Bob and I am 40 years old.

// Call work on employee1 instance
employee1.work();  // Output: Bob is working as a Software Engineer.
