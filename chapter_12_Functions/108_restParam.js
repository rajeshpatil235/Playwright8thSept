// rest of the param

function logResult(testName, ...result) {
    console.log(testName);
    console.log(result);
}

logResult("login", 1, 2, 3);
logResult("registration", "hi", "hello");