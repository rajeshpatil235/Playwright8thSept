let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];

let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSum);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[0].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log("Failed test cases:", suiteResults[i][j].split("-")[0]);

        }
    }
}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]