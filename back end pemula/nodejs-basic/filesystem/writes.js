const file = require("fs");

const writeFile = file.createWriteStream("output.txt");

const readFileCallback = (error, data) => {
  if (error) {
    console.log("Data Error");
    return;
  }

  console.log(data);
};

writeFile.write("HALO HALO INI TES");
writeFile.end("=== end ===");

file.readFile("output.txt", "utf-8", readFileCallback);
