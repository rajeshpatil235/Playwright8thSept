let arr = [1, 2, 3, 4, 5, 6];

//push - add to the last
arr.push(7);
console.log(arr);

arr.push(8, 9);
console.log(arr);

arr.push(10, 11, 12);
console.log(arr);

//pop - delete from last

arr.pop();
console.log(arr);
console.log(arr.pop()); //it will show which element will be removed

//unshift - add from the beginning

arr.unshift(100);
console.log(arr);

//shift - remove from the beginning
arr.shift(100);
console.log(arr);



