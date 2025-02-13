const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

//////////
// async function logEvent(message) {
//   const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
//   const logItem = `${dateTime}\t${uuid()}\t${message}`;
//   console.log(logItem);
//   try {
//     if (!fs.existsSync(path.join(__dirname, "logs"))) {
//       await fsPromises.mkdir(path.join(__dirname, "logs"));
//     }
//     await fsPromises.appendFile(
//       path.join(__dirname, "logs", "eventLog.txt"),
//       logItem
//     );
//   } catch (err) {
//     const errorMessage = `Ther is an error: ${err}`;
//     console.log(errorMessage);
//   }
// }

// module.exports = logEvent;
///////
// module.exports = logEvent;

// console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
// console.log("sahar");

// console.log(uuid());
// console.log(uuid());
///////

const logEvent = async (message) => {
  const dateTime = new Date(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "Logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "Logs", "eventLog.txt"),
      logItem
    );
  } catch (err) {
    const message = `There is an error: ${err}`;
    console.log(message);
  }
};

module.exports = logEvent;
