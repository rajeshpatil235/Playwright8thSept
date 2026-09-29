//slice

let arr = [1, 2, 3, 4, 5, 6];
let slice1 = arr.slice(1, 2); //start index, index-1
// console.log(arr);
console.log(slice1);

let slice2 = arr.slice(2, 5); //start index, index-1
console.log(slice2);

let slice3 = arr.slice(2); //start index, index-1
console.log(slice3);

let slice4 = arr.slice(2, 4); //start index, index-1
console.log(slice4);

let splice1 = arr.splice(2, 2, 33, 44);
console.log(arr);

let splice2 = arr.splice(2, 3);
console.log(arr);
