// SOAL KUIS

function hello(name, origin = "Bandung"){
    return `Hallo! Nama saya ${name}. Saya tinggal di ${origin}`
}

const rahmat = hello("Rahmat", "Semarang")
const indra = hello("Indra")

console.log(rahmat)
console.log(indra)




// function convertCtoF(num = 100) {
//   const temp = (9 / 5) * num + 32;

//   return temp
// }

// console.log(convertCtoF(30))
// console.log(convertCtoF())

// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function minus(a, b) {
//   return a - b;
// }

// function calclulate (operation, a, b) {
//     return operation(a,b)
// }

// console.log(calclulate(add, 2, 4))
// console.log(calclulate(multiply, 2, 4))
// console.log(calclulate(minus, 2, 4))

// const conversion = (num = 100) => {
//   return (9 / 5) * num + 32;
// };

// console.log(conversion(40));
