// 4

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }else {
        return false
    }
}

function addNumbers(a, b) {
    return a + b;
}

addNumbers(5, 7);

let multiply = function(a, b) {
     return a * b; 
};
console.log(multiply (5, 7));

let greeting = function(name) {
     console.log(`Hello, ${name}!`); 
};
greeting("John");

multiply = (a, b) => { return a * b;
} 
console.log(multiply (2, 3));
const add = (a, b) => a+b;
console.log(add(2, 3));

let double = (num) => {
    return num * 2;
}
console.log(double(5));

let myFunction = new Function('a', 'b', 'return a * b');
console.log(myFunction(10, 2));