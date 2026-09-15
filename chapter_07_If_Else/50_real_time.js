let isLoggedIn = false;
let userType = "ed";

if (isLoggedIn) {
    if (userType === "viewer") {
        console.log("Read only mode");
    }
    else if (userType === "editor") {
        console.log("Edit only mode");
    }
    else if (userType === "admin") {
        console.log("Can do everything");
    } else {
        console.log("Guest mode");
    }

}
else {
    console.log("You are not logged in.");
}