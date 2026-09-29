//check if it is an array or not

// let result = Array.isArray([1, 2, 3, 4]);
// console.log(result);

// let result = Array.isArray([1]);
// console.log(result);

// let result = Array.isArray(["a"]);
// console.log(result);

// let result = Array.isArray("a");
// console.log(result);

//every and some
//every //all
console.log([1, 2, 3, 4, 5].every(s => s > 0));
console.log([1, 2, 3, 4, 5].every(s => s > 1));
console.log(["pass", "pass", "pass"].every(s => s === "pass"));

//some // atleast one
console.log(["pass", "fail", "pass"].some(s => s === "pass"));
console.log(["pass", "fail", "pass"].some(s => s === "fail"));

