class Person {
    constructor(name = "Anonymous", age = "?") { // default name is Anonymous, if given argument then use that instead
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, my name is ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // flipping twice will give us the boolean value of this.major
    }
    // overrides getDescription from Person class
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    hasHome() {
        return !!this.home;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHome()) {
            greeting += ` I'm visiting from ${this.home}.`;
        }
        return greeting;
    }
}

const me = new Student("Sharon", 25, "Computer Science");
const noName = new Student();
console.log(me.getDescription());

console.log(noName.getDescription());
const juan = new Traveler("Juan", 24, "White Plains, NY");
console.log(juan.getGreeting());