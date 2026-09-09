var v = 10;
let l = 20;
const c = 30;

var name1 = "Rajesh";
var name1 = "Shiv";
name1 = "Kishor";

var testCases = ["pass", "fail", "blocked"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running:", testCases[i]);
}

console.log("Loop counter leaked out of for loop:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();