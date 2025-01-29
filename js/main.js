// var, let and const

// dynamically typed language
// javascript figures out what a variable is based on
// what you put in it
// Data types: strings, numbers, boolean, null, undefined, 
// symbol (not going to talk about symbol)
let age = 52;
const name = "Eric Couch";
let weight = 225.5;
let isCool = true;
let x = null;
let y = undefined;
let z; // undefined

let LearnFestClass = "Web Development";


// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof weight);
// console.log(typeof isCool);
// console.log(typeof x);

// console.log(name + 1);  // concatenation
// console.log(age + 1);   // addition

let sAge = "52";
// coersion
if (sAge === age) {
    console.log("They are equal");
}

// string methods
console.log(name.length);
console.log(name.toUpperCase());
// toUpperCase is a method, length is a property
console.log(name.substring(1, 3));
console.log(name.substr(1, 3));
console.log("They are equal".split(" "));

const languages = "HTML, CSS, JavaScript, Python, Java, C#";
console.log(languages.split(", "));

// this is a comment
// console.log("Hello World");

// arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
let fruits = ["apples", "oranges", "pears", "grapes", "bananas"];
console.log(fruits[2]);
fruits[2] = "blueberries";
console.log(fruits);

// array methods
fruits.push("mangos");
console.log(fruits);

fruits.unshift("strawberries");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.indexOf("oranges"));

