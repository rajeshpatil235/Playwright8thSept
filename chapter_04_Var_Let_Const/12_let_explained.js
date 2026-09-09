// let - Block Scoped

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

if (true) {
    let a = 10;
    console.log(a);
}

console.log(a); //ReferenceError: a is not defined


console.log(executionTime); // ReferenceError: executionTime is not defined

// Blocks -
// {}
// if(){}
// funcion name(){}
