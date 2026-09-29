//splice

let arr = [1, 2, 3, 4];

arr.push(5, 6);

console.log(arr);

// arr.splice(2,2); //it will delete 2 elements from second index
// console.log(arr);

// arr.splice(2, 2, 33, 44); //start, deleteCount, itemsToAdd // it will replace two elements from second index
// console.log(arr);

arr.splice(2, 0, 7, 8); //start, don't remove, itemsToAdd
console.log(arr);
