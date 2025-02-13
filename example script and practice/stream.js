const fs = require("fs");
const OS = require("os");
const path = require("path");
const rs = fs.createReadStream("./files/story.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("./files/new-story.txt");

// rs.on("data", (chunkData) => {
//   ws.write(chunkData);
// });

rs.pipe(ws);

console.log("sahar");
