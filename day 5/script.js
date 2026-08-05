var message;

do {
    message = prompt("Enter your message");
} while (message === "" || message === null);

for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + message + "</h" + i + ">");
}

var sum = 0;
var num;

while (sum <= 100) {

    num = prompt("Enter a number ");

    if (num === null) {
        break;
    }

    if (isNaN(num) || num === "") {
        alert("Please enter a valid number");
        continue;
    }

    num = +num;

    if (num === 0) {
        break;
    }

    sum += num;
}

document.write("<h2>Total Sum = " + sum + "</h2>");

var name;

do {
    name = prompt("Enter your name");
} while (
    name === "" ||
    name === null ||
    !isNaN(name)
);

var birthYear;

do {
    birthYear = prompt("Enter your birth year");
} while (
    isNaN(birthYear) ||
    birthYear === "" ||
    birthYear >= 2010
);

birthYear = +birthYear;

var age = new Date().getFullYear() - birthYear;

document.write(`<h2>Name : ${name}</h2>`);
document.write(`<h2>Birth Year : ${birthYear}</h2>`);
document.write(`<h2>Age : ${age}</h2>`);