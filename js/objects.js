// object literals
const person = {
    firstName: 'Eric',
    lastName: 'Couch',
    age: 52,
    hobbies: ['music', 'movies', 'reading'],
    address: {
        street: '201 Shaffner St.',
        city: 'Ponder',
        state: 'TX'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// destructuring
// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let city = person.address.city;
const { firstName, lastName, age, address: { city } } = person;

console.log(firstName, lastName, age, city);

// add properties
person.email = 'eric.couch@cognizant.com';
console.log(person);

// array of object literals
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// convert to JSON
// json javascript object notation
const todoJSON = JSON.stringify(todos);

const todosJSON = {
    "todos": [
        {
            "id": 1,
            "text": "Take out trash",
            "isCompleted": true
        },
        {
            "id": 2,
            "text": "Meeting with boss",
            "isCompleted": true
        },
        {
            "id": 3,
            "text": "Dentist appointment",
            "isCompleted": false
        }
    ]
}

// Loops
// for, while, for...of
console.log('for');
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text + ' ' + todos[i].isCompleted);
}
console.log('while');
let i = 0;
while (i < todos.length) {
    console.log(todos[i].text + ' ' + todos[i].isCompleted);
    i++;
}
console.log('for..of');
for (let todo of todos) {
    console.log(todo.text + ' ' + todo.isCompleted);
}

// higher order functions
// forEach, map, filter, reduce, sort
// these are functions that can accept other functions as arguments
console.log('forEach');
todos.forEach(function (todo) {
    console.log(todo.text);
});

// map returns an array
console.log('map');
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

// filter returns an array
console.log('filter');
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log('completed todos');
console.log(todoCompleted);

// fat arrow
console.log('fat arrow');
const todoCompleted2 = todos.filter(todo => todo.isCompleted === true)
                            .map(todo => todo.text);