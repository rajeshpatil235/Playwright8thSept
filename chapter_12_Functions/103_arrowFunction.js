// Arrow Function (ES6) EcmaScript

const greet1 = function (name) {
    return "Hi, " + name;
}

let a = greet1("Rajesh");
console.log(a);

//instead in arrow, we can write above as
const greet2 = (name) => "Hi, " + name; //removed function keyword, curly braces, return keyword
let b = greet2("Rajesh");
console.log(b);

const doubleIt = (num) => num * 2;
let c = doubleIt(10);
console.log(c);

const tripleIt = (num) => num * 3;
let d = tripleIt(10);
console.log(d);

const sum = (a, b) => a + b;
let e = sum(3, 5);
console.log(e);


const say1 = () => console.log("hi");
let f = say1();
const say2 = () => "hi";
let g = say2();
say1();
console.log(f);
console.log(g);

const num1 = [1, 2, 3];
let result1 = num1.map(s => console.log(s * 2));
console.log(result1);

const num2 = [1, 2, 3];
let result2 = num2.map(s => s * 2);
console.log(result2);


