const path = require("path");

console.log(path.sep);

const filePath = path.join("/folder","subfolder","test.js")
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,"folder","subfolder","text.js");
console.log(absolute);
