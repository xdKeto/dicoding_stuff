/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

import unique, { splitString } from "./utils.js";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);

// import categorizeNumber, * as variable from "./playground_base.js";

// console.log(variable.name)
// console.log(variable.email)
// console.log(categorizeNumber(60))
