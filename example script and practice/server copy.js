const fs = require("fs");
const path = require("path");
const logEvent = require("./logEvent");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

console.log("Solmaz🦆");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.error(`There was an error : ${err}`);
//   process.exit(1);
// });

//////
//initialize object
// const myEmitter = new MyEmitter();

// // add listener for log event

// myEmitter.on("log", (message) => {
//   logEvent(message);
// });

// setTimeout(() => {
//   myEmitter.emit("log", "Log event emitted");
// }, 1000);

//////

const myEmitter = new MyEmitter();

myEmitter.on("log", (message) => {
  logEvent(message);
});

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted");
}, 2000);
