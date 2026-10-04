// Use const by default. Use let only when you know the
// variable itself needs to be reassigned.

let config1 = { name: "Rajesh", age: 31 };
config1.no = 8899;
config1.city = "Mumbai";
console.log(config1);
config1={};
console.log(config1);


const config2 = { name: "Shiv", age: 33 };
config2.no = 7759;
config2.city = "Delhi";
console.log(config2);
config2={}; //TypeError: Assignment to constant variable.
console.log(config2); 





// const user = {
//     name: "Rajesh"
// };

// user.name = "Pramod"; // ✅ allowed

// user = {};            // ❌ not allowed