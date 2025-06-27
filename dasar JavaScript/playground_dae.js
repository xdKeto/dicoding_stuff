// KUIS
const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  employees.push({ name: name, email: email, joinYear: joinYear });
}

addEmployee('Yesto', 'yesto@gmail.com', 2025)
console.log(employees);

// SPREAD
// const firstName = { firstName: "Yesto" };
// const lastName = { lastName: "Minggus" };
// const fullName = { ...firstName, ...lastName };
// console.log(fullName);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b];
// console.log(c)

// MAP
// const profile = new Map([
//   ["name", "Yesto"],
//   ["age", 21],
// ]);
// console.log(profile);

// profile.set("height", 180);
// console.log(profile.get("height"));
// profile.delete("height");
// console.log(profile);

// const customer = Array.from("customer");
// console.log(customer);

// ARRAY
// const arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);
// arr[0] = 100;
// console.log(arr);
// arr.push(40);
// console.log(arr);
// delete arr[2];
// console.log(arr);
// arr.splice(1,1)
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.reverse()
// console.log(arr);
// arr.sort()
// console.log(arr);
