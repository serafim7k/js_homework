// 4

let senseOfLife = 42;

function sense(otherSenseOfLife = senseOfLife) {
    return otherSenseOfLife;
}

console.log(sense());
console.log(sense(1));

console.log('');
// 5

function count(number1, number2, string) {
    switch (string) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        
        default:
            break;
    }
}

console.log(count(1, 2, '+'));
console.log(count(1, 2, '-'));
console.log(count(1, 2, '*'));
console.log(count(1, 2, '/'));

console.log('');
// 6

function sorting(lst) {
    return lst.sort();
}

console.log(sorting([3, 1, 4, 2, 5]))

console.log('');
// 7

function min(a, b) {
    if (a < b) {
        return a;
    }else {
        return b;
    }
}

console.log(min(2, 1));