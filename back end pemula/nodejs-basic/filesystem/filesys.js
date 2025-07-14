const file = require("fs");

const readFileCallback = (error, data) => {
  if (error) {
    console.log("Data Error");
    return;
  }

  console.log(data);
};

file.readFile("todo.txt", "UTF-8", readFileCallback);
