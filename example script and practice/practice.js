const OS = require("os");
const path = require("path");
const fsPromises = require("fs").promises;

// const fileOps = async function () {
//   try {
//     const data = await fsPromises.readFile(
//       path.join(__dirname, "files", "starter.txt"),
//       "utf8"
//     );

//     console.log(data);

//     await fsPromises.writeFile(
//       path.join(__dirname, "files", "promisesWrite.txt"),
//       data
//     );

//     await fsPromises.appendFile(
//       path.join(__dirname, "files", "promisesWrite.txt"),
//       "\n\n Nice to meet you"
//     );

//     console.log(data);

//     await fsPromises.rename(
//       path.join(__dirname, "files", "promisesWrite.txt"),
//       path.join(__dirname, "files", "promisesComplete.txt")
//     );

//     const newData = await fsPromises.readFile(
//       path.join(__dirname, "files", "promisesComplete.txt"),
//       "utf8"
//     );

//     console.log(newData);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fileOps();
///////////////////////////////////////////////////////////////////////////
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (error, data) => {
//     if (error) throw error;
//     console.log(data);
//   }
// );

// console.log("Sahar");

// fs.writeFile(
//   path.join(__dirname, "files", "greeting.txt"),
//   "It is greeting file",
//   (err) => {
//     if (err) throw err;
//     console.log("Nice to meet you");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "It is test file",
//   (err) => {
//     if (err) throw err;
//     console.log("It is test for appending for non-existent file");
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.log(`There is a error: ${err}`);
//   process.exit(1);
// });

//////////////////////////////////////////////////////////////////

// const fileOps = async function () {
//   try {
//     const data = await fsPromises.readFile(
//       path.join(__dirname, "files", "starter.txt"),
//       "utf8"
//     );
//     await fsPromises.writeFile(
//       path.join(__dirname, "files", "writtentext.txt"),
//       data
//     );
//     await fsPromises.appendFile(
//       path.join(__dirname, "files", "writtentext.txt"),
//       "\n\n I am strong and learn programmin. I will be one of the best programmer in the world. I promise to myself"
//     );

//     await fsPromises.rename(
//       path.join(__dirname, "files", "writtentext.txt"),
//       path.join(__dirname, "files", "lastversionOfText.txt")
//     );

//     let newData = await fsPromises.readFile(
//       path.join(__dirname, "files", "lastversionOfText.txt"),
//       "utf-8"
//     );
//     console.log(newData);
//   } catch (err) {
//     console.error(`There is an error including ${err}`);
//   }
// };

// fileOps();

/////

const fileOps = async function () {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );

    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "WrittenFile.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "WrittenFile.txt"),
      "I am really strong. I have to be a the best programmer in the world. Do not forget it, Sahar"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "WrittenFile.txt"),
      path.join(__dirname, "files", "changedNameFile.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "changedNameFile.txt"),
      "utf-8"
    );

    console.log(newData);
  } catch (err) {
    const text = `There is an error including : ${err}`;
    console.log(text);
  }
};

fileOps();
