function doSomething (countTo) {
    let x = 1;
    while (x <= countTo) {
        console.log(x);
        x++;
    }
}

// constructor function
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.calculateBirthYear = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

const Eric = new Person('Eric', 52);
const Jane = new Person('Jane', 28);

console.log(Eric.name);
console.log(Eric.calculateBirthYear());

class PersonObject {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    calculateBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}