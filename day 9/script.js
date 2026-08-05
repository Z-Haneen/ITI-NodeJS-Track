// =========================
let x = 20;
let y = 40;
console.log(x, y);
[x, y] = [y, x]
console.log(x, y);
// ====================================

function Min_Max(...arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    return [min, max]
};

var result = Min_Max(10, 30, 12, 6, 25, 3)

console.log("Min:", result[0]);
console.log("Max:", result[1]);

// ====================================

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every(
    function (fruit) {
        return typeof fruit === "string";
    });
console.log(allStrings);

// ===================

let some = fruits.some(
    function (fruit) {
        return fruit.startsWith("a");
    });
console.log(some);

// ===================

let filtered = fruits.filter(
    function (fruit) {
        return fruit.startsWith("b") || fruit.startsWith("s");
    }
);

console.log(filtered);
// ===================

let newfruits = fruits.map(fruit => `I like ${fruit}`);
console.log("new array:", newfruits);
// ===================

newfruits.forEach(item => console.log(item));