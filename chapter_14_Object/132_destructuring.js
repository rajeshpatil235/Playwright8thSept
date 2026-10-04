// What is object destructuring?
// Object destructuring means taking values from an object and 
// storing them directly into variables.

// Without destructuring:
const student = {
    name: "Pramod",
    age: 10,
    city: "Mumbai"
};

// const name = student.name;
// const age = student.age;
// const city = student.city;

// console.log(name);
// console.log(age);

const { name, city } = student;
console.log(name);
console.log(city);

const{name: myName, city: myCity}=student;
console.log(myName);
console.log(myCity);

