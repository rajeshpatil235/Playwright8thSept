// Primitive vs Reference

let a = 10;
let b = a;
console.log(a);
console.log(b);
b = 20;
console.log(a);
console.log(b);

let c = { status: "pass" };
let d = c;
console.log(c);
console.log(d);
d.status = "fail";
console.log(c);
console.log(d);
