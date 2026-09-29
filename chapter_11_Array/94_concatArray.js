let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);

console.log(c);

//spread

let d = [...a, ...b];
console.log(d);

//join
let joined = ["rajesh", "patil"].join("_");
console.log(joined);
