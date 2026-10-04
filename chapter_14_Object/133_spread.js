const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(obj1);

const copy = { ...obj1 };
console.log(copy);

let config = { browser: "chrome", timeout: 3000 };
console.log(config);
config.maxTries = 2;
config.testName = "login";
config.browser="firefox";
console.log(config);


