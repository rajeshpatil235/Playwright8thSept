let marks = [56, 78, 89, 45, 90];

//map 
//it always returns same no. of elements
//based on the condition, their values are changed
console.log(marks.map(s => s > 60 ? 'pass' : 'fail'));

let result = marks.map(s => s < 40 ? "pass" : "fail");
console.log(result);

let result1 = marks.map(s => s > 40 ? "pass" : "fail");
console.log(result1);

// filter — keeps elements that pass a condition
let pass = marks.filter(s => s > 60);
console.log(pass);

//reduce - accumulates to a single value
let sum = marks.reduce((a, b) => a + b, 0);
console.log(sum);

//flat - flattens nested arrays into one
let nested = [[1, 2], [4, 5], [7, 8, 9]];


console.log(nested);
console.log(nested.flat());

const numbers = [10, 50, 20, 80, 30];

const largest = numbers.reduce((max, number) => {
    return number > max ? number : max;
}, 0);

console.log(largest);
