const file = require("fs");

// init eventemitter
const stream = file.createReadStream("./todo.txt", {
  highWaterMark: 20, //size stream
});

// register emmiter trigger
stream.on("readable", () => {
  try {
    process.stdout.write(`[${stream.read()}]`);
  } catch (error) {}
});

stream.on("end", () => {
  console.log("DONE");
});
