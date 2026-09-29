//normal function

function validateStatusCode(status) {
    if (status = 200 && status < 300) {
        console.log("API is working fine.");
    }
}

// function as an expression
const validateStatusCodeExp = function (status) {
    if (status = 200 && status < 300) {
        console.log("API is working fine.");
    }
}

//arrow function
const validateStatusCodeArrow = (status) => {
    if (status = 200 && status < 300) {
        console.log("API is working fine.");
    }
}
validateStatusCode(204);
validateStatusCodeExp(200);
validateStatusCodeArrow(205);