let str = "  Hello, World!  ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());

let msg = "Test: FAIL. Retry: FAIL.";
// console.log(msg.replace("FAIL","PASS"));
// console.log(msg.replaceAll("FAIL","PASS"));
console.log(msg.replaceAll(/FAIL/g, "PASS"));

// Concatenation
console.log("hi" + ", " + "my name is rajesh" + ".");
console.log("Hello".concat(" my name is rajesh."));
console.log(`${"Hello"}     ${"Rajesh"}`);


let url = "https://app.vwo.con?app=pramod";
console.log(url.replace("app", "prod"));
// console.log(url.replace(/app/g, "prod"));

let a = "rajesh,patil,reererer";
// console.log(a.split(","));
console.log(a.split(",").join("-"));

let b = "rajesh-patil-fdfdfd";
console.log(b.split("-"));
console.log(b.split("-").join("---"));

let dateParts = ['2023','23','05'];
console.log(dateParts.join("-"));


