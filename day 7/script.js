function daytoname(dateStr) {
    var date = new Date(dateStr);

    var daysnames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayidx = date.getDay();

    return daysnames[dayidx];
}

console.log(daytoname("6/5/2024"));

function check2(x, y) {
    if (arguments.length !== 2) {
        throw "parameters must be exactly 2!";
    }

    console.log("success ", x, y);
}

check2(2, 5);
//check2(2, 3, 4);
function addnums() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
            throw "parameters must be numerical values only!";
        }

        sum += arguments[i];
    }

    return sum;
}

console.log(addnums(5, 10, 15, 20));
//console.log(addnums(5, "ali", 15, 20));

function reverseparm() {
    var elementsArray = [];

    for (var i = 0; i < arguments.length; i++) {
        elementsArray.push(arguments[i]);
    }

    elementsArray.reverse();

    return elementsArray;
}


console.log(reverseparm("A", "B", "C", "D"));
console.log(reverseparm(1, 2, 3, 4, 5));    