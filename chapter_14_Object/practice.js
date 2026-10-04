// let suiteResults = [
//     ["login-pass", "register-pass", "logout-pass"],
//     ["search-pass", "filter-fail", "sort-pass"],
//     ["checkout-fail", "payment-fail", "confirm-pass"]
// ];

// for (let i = 0; i < suiteResults.length; i++) {
//     for (let j = 0; j < suiteResults[i].length; j++) {
//         // console.log(suiteResults[i][j]);
//         if (suiteResults[i][j].includes("fail")) {
//             console.log("Test Case Failed:", suiteResults[i][j].split("-")[0]);
//         }
//     }
// }

let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        // row += row + "*";
        console.log(row += "*");

    }
    console.log("");
}






















// let test = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// rowSum = test.map(row => row.reduce((a, b) => a + b), 0);
// console.log(rowSum);
