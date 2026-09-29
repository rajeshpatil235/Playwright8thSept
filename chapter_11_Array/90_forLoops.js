let a = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
console.log("--------------------------");
for (test of a) {
    console.log(test);
}
console.log("--------------------------");

for (let test in a) {
    console.log(test, ">", a[test]);
}
console.log("--------------------------");

a.forEach((i, index) => {
    console.log(i, ">", index);
});
console.log("--------------------------");

for (let [i, test] of a.entries()) {
    console.log(i, test);

}