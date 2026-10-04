const user = {
    name: "Rajesh",
    age: 31
}

const calc = {
    add(a, b) {
        return a + b;
    }, sub(a, b) {
        return a - b;
    }, div(a, b) {
        return a / b;
    }, mul(a, b) {
        return a * b;
    }, mod(a, b) {
        return a % b;
    }
}
console.log(calc.add(2, 4));;
console.log(calc.sub(2, 4));;
console.log(calc.div(2, 4));;
console.log(calc.mul(2, 4));;
console.log(calc.mod(2, 4));;
