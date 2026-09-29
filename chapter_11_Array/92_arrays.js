let fruits = ["cherry", "apple", "banana"];

fruits.sort();
console.log(fruits);
// console.log(fruits.sort()); //same as above two steps

let num = [1, 10, 3, 33];
console.log(num.sort());

num.sort((a, b) => a - b);
console.log(num);

num.sort((a, b) => b - a);
console.log(num);




