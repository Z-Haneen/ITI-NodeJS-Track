// console.log("Hello World");
// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

/**
 * const , let , var
 * var don't use it
 *
 * string , number , boolean , object , array, null , undefined
 *
 * function ( expression , statement , arrow)
 *
 */

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

// const object = {
//   name: "mo",
//   stetmentfunction: function () {
//     console.log(this);
//   },
//   arrowfunction: () => {
//     console.log(this);
//   },
// };

// object.stetmentfunction();
// object.arrowfunction();
// console.log(this);

/**
 * array methods:
 * filter
 * map
 * find
 * forEach
 * reduce
 * some
 * every
 * findIndex
 */
// const salary = [1000, 2000, 3000, 4000, 5000];
// const array2 = [333, 444, 555];
// const newArray = salary.concat(array2);
// console.log(newArray);
// salary.forEach((number, index, array) => {
//   console.log(number * 2);
//   array2.push(number * 2);
//   console.log(index);
//   console.log(array);
// });

// const salary_sum = salary.reduce((mult, num) => mult * num, 1);
// console.log(salary_sum);

// const have2000 = salary.some((num) => num === 10000);
// console.log(have2000);

// const allSalaryEven = salary.every((num) => num % 2 === 0);
// console.log(allSalaryEven);

// const indexof5000 = salary.findIndex((num) => num === 5001);
// console.log(indexof5000);

/**
 * temlate literals `my name is ${name}` === "my name is" + name
 * destructuring
 * spread operator
 * rest operator
 */

// const newArray2 = [...salary, ...array2];

// console.log(newArray2);

// function sum(...numbers) {
//   console.log(numbers);
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 10, 100));

// const objs = { name: "mo", age: 20, gender: "male" };
// const { name, age } = objs;
// console.log(name, age);

/**
 * high order function
 */

// function returnNewArray(arr, func) {
//   return arr.map(func);
// }

// const newArray3 = returnNewArray(salary, (number) => number + 500);
// const newArray4 = returnNewArray(salary, (number) => number * 2);
// console.log(newArray3);
// console.log(newArray4);

// setTimeout(() => {
//   console.log("set timeout");
// }, 0);
// console.log("end");

console.log("start");
setTimeout(() => {
  console.log("set timeout");
}, 0);
setImmediate(() => {
  console.log("set immediate");
});
process.nextTick(() => {
  console.log("process next tick");
});
Promise.resolve().then(() => {
  console.log("promise resolve");
});
