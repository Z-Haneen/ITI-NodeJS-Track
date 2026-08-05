// console.log("A");

// setTimeout(() => console.log("B"), 0);

// setImmediate(() => console.log("C"));

// Promise.resolve().then(() => console.log("D"));

// process.nextTick(() => console.log("E"));

// fs.readFile(__filename, () => {
//   console.log("F");

//   process.nextTick(() => console.log("G"));

//   Promise.resolve().then(() => console.log("H"));

//   setTimeout(() => console.log("I"), 0);

//   setImmediate(() => console.log("J"));
// });

// console.log("K");

// A;
// K;
// E;
// D;
// B;
// C;
// F;
// G;
// H;
// J;
// I;
