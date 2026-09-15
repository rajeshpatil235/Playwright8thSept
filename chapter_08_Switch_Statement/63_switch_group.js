let browser = "firefox";

switch (browser) {
    case "chrome":
    case "edge":
    case "opera":
    case "brave":
        console.log("Chromium Engine");
        break;
    case "webkit":
        console.log("Safari Engine");
        break;
    case "firefox":
        console.log("Mozilla Engine");
        break;
    default:
        console.log("Unknow Engine");

}