let results = ["pass", "fail", "skip", "fail", "pass", "fail"];
console.log(results);

// indexOf — returns first index, or -1 if not found
console.log(results.indexOf("fail"));
console.log(results.indexOf("fails"));

// lastIndexOf — searches from the end, or -1 if not found
console.log(results.lastIndexOf("fail"));
console.log(results.lastIndexOf("fails"));

// // includes — returns boolean
console.log(results.includes("pass"));
console.log(results.includes("fail"));
console.log(results.includes("fails"));


let num = [1, 2, 3, 4, 5, 6];
// returns first matching element
console.log(num.find(s => s > 3));
// returns last matching element
console.log(num.findLast(s => s > 3));
// returns first matching element index
console.log(num.findIndex(s => s > 3));
// returns last matching element index
console.log(num.findLastIndex(s => s > 3));

