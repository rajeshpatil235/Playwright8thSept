// function add(a, b, c) {

//     return a + b + c;

// }
// let num = [1, 2, 3];
// const a = add(...num);
// console.log(a);

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
const a=hasError(...responseCodes); // true
console.log(a);
