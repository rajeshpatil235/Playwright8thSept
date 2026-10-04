let config = {
    browser: "chrome",
    timeout: 3000,
    testName: "login test"
}

// console.log(config);

let config2 = {};
config2.browser = "firefox";
config2.timeout = 4000;
config2.testName = "login test";

console.log(config);
console.log(config2);
if (config.browser === "chrome") {
    console.log("I will execute in Chrome browser.");
} else {
    console.log("I will execute in available browser.");
}
delete config.browser;
if (config.browser === "chrome") {
    console.log("I will execute in Chrome browser.");
} else {
    console.log("As Chrome is unavailable, I will execute in Firefox browser.");
}

