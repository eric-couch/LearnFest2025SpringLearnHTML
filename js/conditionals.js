let x = 9;

// if (x == 10) {
//   console.log('x is 10');
// }

x = '10';

// if (x == 10) {
//     console.log('x is 10');
//   }

// no coersion
if (x === 10) {
    console.log('x is 10');
} else {
    console.log('x is not 10');
}

x = 5;

if (x < 10) {
    console.log('x is less than 10');
} else {
    console.log('x is not less than 10');
}

if (x < 10 && x > 0) {
    console.log('x is less than 10 and greater than 0');
}

if (x < 5 || x < 10) {
    console.log('x is less than 5 or less than 10');
}

// ternary operator
const color = x > 10 ? 'red' : 'blue';
console.log(color);

// switch
console.log('switch');
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}