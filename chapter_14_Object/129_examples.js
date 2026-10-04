const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);


const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);

// In a JavaScript object, if the key is a normal valid identifier, quotes are optional.

// "name": "pramod"

// is equivalent to:

name: "pramod"

// So these are the same:

const a = {
    "name": "Rajesh"
};

const b = {
    name: "Rajesh"
};

// When the property name contains spaces, special characters, or isn't a valid identifier:

const student = {
    "first name": "Pramod",
    "phone-number": 987654320,
    "123age": 10
};

// You cannot write:

// const student = {
//     first name: "Pramod" // 
// };

// You would access those quoted properties using brackets:

console.log(student["first name"]);
console.log(student["phone-number"]);

//"name" and name are both valid object keys in JavaScript
//  when name is a valid identifier. Quotes become important 
// when the property name cannot be written as a normal identifier.