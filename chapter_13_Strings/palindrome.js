let str = 'nitsin';

console.log(str);

// let reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }
// console.log(reverse);

// if (str === reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a palindrome");
// }


let reverse = str.split("").reverse().join("");
if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}


