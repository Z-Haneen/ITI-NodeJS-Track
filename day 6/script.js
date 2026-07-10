// 1.1 Palindrome Check
var myprompt = prompt("Enter a word to check palindrome:");
var check = prompt("Is it case-sensitive? Enter 'y' or 'n':");

var processedWord = (check.toLowerCase() === 'n') ? myprompt.toLowerCase() : myprompt;

var reversedWord = processedWord.split('').reverse().join('');

if (processedWord === reversedWord) {
    document.write("<h3>Yes, it is a palindrome</h3>");
} else {
    document.write("<h3>No, it is not a palindrome</h3>");
}
// 1.2 Count 'e' characters
var eword = prompt("Enter the word you want to count 'e' in:");
var count = 0;
for (var i = 0; i < eword.length; i++) {
    if (eword[i] === 'e') count++;
}
document.write("<p>Number of 'e' characters: " + count + "</p>");


// 2.1 Circle Area
var radius = prompt("What is the value of your circle's radius?");
var area = Math.PI * Math.pow(radius, 2);
document.write("<h3>Total area of the circle is " + area + "</h3>");

// 2.2 Square Root
var valueForSqrt = prompt("What is the value you want to calculate its square root?");
document.write("<h3>Square root of " + valueForSqrt + " is " + Math.sqrt(valueForSqrt) + "</h3>");


//3.1 operation on numbers
var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(+prompt("Enter number " + (i + 1) + ": "));
}

var sum = arr[0] + arr[1] + arr[2];
var mul = arr[0] * arr[1] * arr[2];
var div = arr[0] / arr[1] / arr[2];

document.write("<h2>Adding -- Multiplying -- and dividing 3 values</h2>");
document.write("<p>sum of the 3 values: " + arr.join('+') + " = " + sum + "</p>");
document.write("<p>multiplication of the 3 values: " + arr.join('*') + " = " + mul + "</p>");
document.write("<p>division of the 3 values: " + arr.join('/') + " = " + div + "</p>");

//3.2 sort ascending  and descending

var arr5 = [];
for (var i = 0; i < 5; i++) {
    arr5.push(+prompt("Enter element " + (i + 1) + " for sorting:"));
}
document.write("<h2>Sorting</h2>");
document.write("<p>u've entered the values of: " + arr5.join(', ') + "</p>");

//  (Descending)
var descArr = [...arr5].sort((a, b) => b - a);
document.write("<p>ur values after being sorted descending: " + descArr.join(', ') + "</p>");

//  (Ascending)
var ascArr = [...arr5].sort((a, b) => a - b);
document.write("<p>ur values after being sorted ascending: " + ascArr.join(', ') + "</p>");