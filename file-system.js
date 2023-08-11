// 3. File System
const fs = require("fs");

// Writing to a file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File 'welcome.txt' has been created with content 'Hello Node'.");
});

// Reading from the previously created 'welcome.txt' file
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Content of 'welcome.txt':", data);
  });