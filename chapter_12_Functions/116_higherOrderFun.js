// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLogin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFailed() {
    return "fail";
}

console.log(runWithLogin(loginTest, "login"));
console.log(runWithLogin(loginTestFailed, "login"));
