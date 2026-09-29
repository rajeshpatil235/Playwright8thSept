//create array (Preferred)
let browsers = ["chrome", "edge", "firefox"];

//Array constructor

let scores = new Array(3); //here 3 is the length of an array
scores[0] = 10;
scores[1] = 20;
scores[2] = 30;

let scores2 = new Array(40, 50, 60);
console.log(scores);
console.log(scores2);

let test = Array.of(10, 20, 30, 14, 50);
console.log(test);

let chars = Array.from("rajesh patil");
console.log(chars);

let chars1 = Array.from("123456789");
console.log(chars1);
