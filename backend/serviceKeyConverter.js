const fs = require("fs");

const jsonString = fs.readFileSync("./serviceAccountKey.json", "utf-8");
const base64String = Buffer.from(jsonString).toString("base64");

console.log(base64String);
