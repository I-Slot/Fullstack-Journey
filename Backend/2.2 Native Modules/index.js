const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.writeFile("message.txt", "I'm Ismail Adeshola Ogundele", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
