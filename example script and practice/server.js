const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide, exponentiation } = require("./math");

// console.log(os.homedir());
// console.log(os.type());
// console.log(os.version());

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(add(4, 4));
console.log(subtract(4, 4));
console.log(multiply(4, 4));
console.log(divide(4, 4));
console.log(exponentiation(4, 4));
