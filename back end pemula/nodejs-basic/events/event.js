const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

// const makeCoffe = ({ name }) => {
const makeCoffe = (name) => {
  console.log(`Kopi ${name} telah dibuat`);
};

// const makeBill = ({ name, price }) => {
const makeBill = (name, price) => {
  console.log(`Billing untuk Kopi ${name}, adalah Rp${price} `);
};

const onCoffeeListener = ({ name, price }) => {
  makeCoffe(name);
  makeBill(name, price);
};

// daftarin makeCoffe ke event listener
// myEmitter.on("coffe-make", makeCoffe);
// myEmitter.on("coffe-make", makeBill);
myEmitter.on("coffe-make", onCoffeeListener);

// trigger makeCoffe and makeBill
// myEmitter.emit("coffe-make", { name: "Arabica" });
myEmitter.emit("coffe-make", { name: "Arabica", price: 15000 });
