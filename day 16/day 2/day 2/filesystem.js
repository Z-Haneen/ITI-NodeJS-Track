const fs = require("fs");

const readfile = fs.readFileSync("input.json", "utf-8");

// console.log(readfile);
// console.log(typeof readfile);

/**
 * JSON.parse(jsonString) convert json string to object
 * JSON.stringify(jsObject) convert js object to json string
 */

const jsObject = JSON.parse(readfile);
// console.log(jsObject);
// console.log(typeof jsObject);

jsObject.push({
  name: "mona",
  age: 21,
});
// console.log(jsObject);

// fs.writeFileSync("input.json", JSON.stringify(jsObject), "utf-8");

// const data = fs.readFile("inputooo.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("data inside callback function", data);
// });
// console.log("data outside callback function", data);

// fs.writeFile("input.json", JSON.stringify(jsObject), (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("data added successfully");
// });

/**
 * callback function
 * promise
 * async await
 *
 * suger syntax only
 */

function step1(data, callback) {
  setTimeout(() => {
    console.log("step1", data);
    callback(data + "=> step1");
  }, 1000);
}
function step2(data, callback) {
  setTimeout(() => {
    console.log("step2", data);
    throw new Error("custom error");
    callback(data + "=> step2");
  }, 1000);
}
function step3(data, callback) {
  setTimeout(() => {
    console.log("step3", data);
    callback(data + "=> step3");
  }, 1000);
}
function step4(data, callback) {
  setTimeout(() => {
    console.log("step4", data);
    callback(data + "=> step4");
  }, 1000);
}
// //callback hell
// step1("start", (res1) => {
//   try {
//     step2(res1, (res2) => {
//       try {
//         step3(res2, (res3) => {
//           step4(res3, (res4) => {
//             console.log("final result =>", res4);
//           });
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

function step1(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step1", data);
      resolve(data + "=> step1");
    });
  });
}
function step1(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step1", data);
      resolve(data + "=> step1");
    });
  });
}
function step2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step2", data);
      reject(new Error("custom error"));
      resolve(data + "=> step2");
    });
  });
}
function step3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step3", data);
      resolve(data + "=> step3");
    });
  });
}
function step4(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step4", data);
      resolve(data + "=> step4");
    });
  });
}
// step1("start")
//   .then((res1) => {
//     return step2(res1);
//   })
//   .then((res2) => {
//     return step3(res2);
//   })
//   .then((res3) => {
//     return step4(res3);
//   })
//   .then((res4) => {
//     console.log("final result =>", res4);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function processSteps() {
  try {
    const res1 = await step1("start");
    const res2 = await step2(res1);
    const res3 = await step3(res2);
    const res4 = await step4(res3);
    console.log("final result =>", res4);
  } catch (error) {
    console.log(error);
  }
}
processSteps();
