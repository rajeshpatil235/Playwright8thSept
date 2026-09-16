// Triangle classifier

// let a = 1, b = 2, c = 3;

// if (a === b && b === c) {
//     console.log("Equilateral triangle");
// } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && a !== b)) {
//     console.log("Isosceles triangle");
// } else {
//     console.log("Scalene triangle");
// }

let a = 1, b = 2, c = 3;

if (a + b <= c || b + c <= a || a + c <= b) {
    console.log("Not a valid triangle");
} else if (a === b && b === c) {
    console.log("Equilateral triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}

