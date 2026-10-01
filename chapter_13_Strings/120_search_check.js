//search and check

let url = "https://staging.vwo.com/api/login?retry=true";
//includes
console.log(url.includes("staging"));
console.log(url.includes("prod"));

//startsWith endsWith
console.log(url.startsWith("h"));
console.log(url.startsWith("https:"));
console.log(url.startsWith("http:"));

console.log(url.endsWith("e"));
console.log(url.endsWith("true"));
console.log(url.endsWith("https://staging.vwo.com/api/login?retry=true"));

//indexOf //lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.lastIndexOf("2"));
console.log(url.lastIndexOf("x"));

//search
console.log(url.search("vwo"));
console.log(url.search("staging"));
console.log(url.search("s"));
console.log(url.search(/staging/));
console.log(url.search(/s/));

