//status code classifier

let statusCode = 405;

if (statusCode > 599 || statusCode < 100) {
    console.log("Invalid status code");
} else if (statusCode < 200) {
    console.log("Information");
} else if (statusCode < 300) {
    console.log("Success");
} else if (statusCode < 400) {
    console.log("Redirection");
} else if (statusCode < 500) {
    console.log("Client");
} else {
    console.log("Server");
}

//test case pass/fail verdict

let expectedMessage = "login successful";
let actualMessage = "login successful";

if (expectedMessage === actualMessage) {
    console.log("Test case passed");
} else {
    console.log("Test case failed");
}

//bug severity classifier

let score = -1;

if (score <= 0 || score > 10) {
    console.log("Invalid score");
} else if (score >= 9) {
    console.log("Critical");
} else if (score >= 7) {
    console.log("High");
} else if (score >= 4) {
    console.log("Medium");
} else {
    console.log("Low");
}

//build health reporter

let health = 70;

if (health > 100 || health < 0) {
    console.log("Invalid");
} else if (health === 100) {
    console.log("Green build");
} else if (health >= 90) {
    console.log("Stable");
} else if (health >= 70) {
    console.log("Unstable");
} else {
    console.log("Broken build");
}

//login lockout after failed attempts

// let attempts = 2;

// if (attempts > 3) {
//     console.log("Invalid input");
// } else if (attempts === 3) {
//     console.log("Account locked");
// } else if (attempts === 2) {
//     console.log(`${3 - attempts} attempt(s) left`);
// } else if (attempts === 1) {
//     console.log(`${3 - attempts} attempt(s) left`);
// } else {
//     console.log("Login successful");
// }

let attempts = 3;
let maxAttempts = 3;

if (attempts < 0 || attempts > maxAttempts) {
    console.log("Invalid input");
} else if (attempts === maxAttempts) {
    console.log("Account locked");
} else {
    console.log(`${maxAttempts - attempts} attempt(s) left`);

}
