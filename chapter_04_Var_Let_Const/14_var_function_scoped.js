var v = 10;
console.log(v);

function greet() {
    var v = 20;
    console.log(v);
    {
        var v = 30;
        console.log(v);
    }
    if (true) {
        var v = 40;
        console.log(v);
    }
    console.log(v);
}

greet();

console.log(v);
