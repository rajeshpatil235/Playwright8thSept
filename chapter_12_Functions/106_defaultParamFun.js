function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
    // return `Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`;

}

retry("Login test");
retry("Registration test", 5, 2000);
retry("Order test", 4, 3000);