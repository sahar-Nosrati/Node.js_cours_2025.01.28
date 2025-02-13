const fs = require("fs");
const OS = require("os");
const path = require("path");

if (!fs.existsSync("./NewDirectory")) {
  fs.mkdir("NewDirectory", (err) => {
    if (err) throw err;
    console.log("NewDirectory created");
  });
}

if (fs.existsSync("./NewDirectory")) {
  fs.rmdir("NewDirectory", (err) => {
    if (err) throw err;
    console.log("NewDirectory removed");
  });
}
