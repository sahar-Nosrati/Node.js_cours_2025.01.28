const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvent = async (message, logName) => {
  const dateTime = new Date(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "Logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "Logs"));
    }
    await fsPromises.appendFile(path.join(__dirname, "Logs", logName), logItem);
  } catch (err) {
    const message = `There is an error: ${err}`;
    console.log(message);
  }
};

module.exports = logEvent;
