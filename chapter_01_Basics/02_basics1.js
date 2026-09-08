let a = 10;
console.log(a);

function print(i) {
    console.log("Hi", i);
}

for (let i = 1; i <= 10000; i++) {
    console.log(i);
    print(i);
}