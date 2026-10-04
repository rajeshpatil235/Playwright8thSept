let testMatrix = [
    ["login", "pass", 200],
    ["logout", "fail", 404],
    ["checkout", "pass", 201],
    ["order", "fail", 400],
    ["product_creation", "fail", 401],
];

console.log("Total test cases executed:", testMatrix.length);

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[0].length; j++) {
        if (testMatrix[i][j] === "pass") {
            console.log("Test case passed:", testMatrix[i][j - 1], "and Status code:", testMatrix[i][j + 1]);
        }
    }
}

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[0].length; j++) {
        if (testMatrix[i][j] === "fail") {
            console.log("Test case failed:", "and", testMatrix[i][j - 1], " and Status code:", testMatrix[i][j + 1]);
        }
    }
}

for (let row of testMatrix) {
    for (let cell of row) {
        // process.stdout.write(cell+" ");
        console.log(cell);

    } console.log();
}

testMatrix.forEach(row => {
    row.forEach(cell =>
        console.log(cell));
})
