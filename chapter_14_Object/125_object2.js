// An object in JavaScript is a collection of key-value pairs 
// used to store related information together.

let student1 = { name: "Rajesh" };
let student2 = { name: "Rajesh", age: 31 };
let student3 = { name: "Rajesh", age: 31, city: "Mumbai" };

let student4 = { "name": "Rajesh", "age": 31, "city": "Mumbai", "no": 8879526272 };

let a = { status: "pass" };
console.log(a);
let b = a;
console.log(b);
console.log(a.status);
console.log(b.status);
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);
// c.status = "fail";
console.log(c);
console.log(d);

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}

if (a == b) {
    console.log("true");
} else {
    console.log("false");
}

if (c===d) {
    console.log("true");
} else {
    console.log("false");
}

if (c==d) {
    console.log("true");
} else {
    console.log("false");
}


