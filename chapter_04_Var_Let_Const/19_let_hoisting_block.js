let x = "global";

if (true) {
// console.log(x);
//
// TDZ
//
    let x = "local";
}

console.log(x);
