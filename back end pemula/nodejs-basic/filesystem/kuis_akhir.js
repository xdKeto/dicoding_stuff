/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const file = require("fs");

const fileWrite = file.createWriteStream("output.txt");
const dataStream = file.createReadStream("./input.txt", {
  highWaterMark: 15,
});

dataStream.on("readable", () => {
  try {
    fileWrite.write(`${dataStream.read()}\n`);
  } catch (error) {}
});

dataStream.on("end", () => {
  console.log("DONE");
});
