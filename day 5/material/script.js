// comparison operators
// return true or false

// var a = 10;
// var b = 20;
// var c = "10";
// var name = "ali"

// console.log(b > a);   //true
// console.log(b >= a);   //true
// console.log(b < a);   //false
// console.log(b <= a);   //false

// // = assign to value
// // ==  compare value only
// // === compare value & type --> strict

// console.log(a == c);  // 10 == "10"
// console.log(a === c); // 10 as number === 10 as string

// // not equal !=
// console.log(a != c);  // 10 != "10"
// console.log(a !== c);  // 10 as number !== 10 as string


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// Logical operator --> true or false

// NOT (!) --> true or false
// one side

// console.log(!true);
// console.log(!false);
// console.log(typeof !false);

// AND (&&) --> true or false
// more than one side
// true only when all sides are true

// console.log(true && true);   //true
// console.log(true && false);  //false
// console.log(false && true);  //false
// console.log(false && false); //false


// OR (||) --> true or false
// false only when all sides are false

// console.log(false || false); //false
// console.log(true || false);  //true
// console.log(false || true);  //true
// console.log(true || true);   //true



// console.log(3 < 2 < 1);

// console.log(3 < 2); //false
// console.log(false < 1);
// console.log(0 < 1); //true



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// condition

// if (condition) {
//     implementation
// }
// else if (condition) {
//     implementation
// }
// else if (condition) {
//     implementation
// }
// else {
//     implementation
// }

// var x = true;

// if (typeof x == "number") {
//     console.log("it is a number")
// }
// else if (typeof x == "boolean") {
//     console.log("it is a boolean")
// }
// else if (typeof x == "string") {
//     console.log("it is string")
// }
// else {
//     console.log("other")
// }


// switch


// switch (variable) {
//     case condition:
//         implementation;
//         break;

//     case condition:
//         implementation;
//         break;

//     case condition:
//         implementation;
//         break;

//     default:
//         implementation
// }

// var name = "ali";

// switch (name) {
//     case "ahmed":
//         console.log("he is ahmed");
//         break;
//     case "ali":
//         console.log("ali");
//         break;

//     default:
//         console.log("i don't know")
// }


// loops

// for loop
// while
// do while

// for (initial value ; end ; increment or dec){
// implementation
// }
// i++ -> i = i +1
// for (var i = 0; i < 6; i++) {
//     console.log(i) //5
// }

// console.log(i)

// 0 1 2 3 4 5

// var counter =1; //initial value
// while(counter < 6){ //end
//     console.log("hello");
//     counter++; //increment
// }

// var counter =1;
// do{
//     console.log("hello");
//     counter++
// }while(counter < 6)


// take age from user          or    check age > 21

// Alert --> message
// alert("hello")


// confirm --> yes or no (true or false)
// var myConfirm = confirm("do you want to continue");
// console.log(myConfirm);

// Prompt -> always return string
// var myPrompt = prompt("enter your data");
// console.log(myPrompt);
// console.log(typeof myPrompt);
// console.log(+myPrompt);
// console.log(typeof +myPrompt);


// +variable -> string -> number


// do {
//     var result = prompt("enter your number");
// } while (isNaN(result) ||   result==="") // false || false = false
// console.log(result)

// // document.write(`<h1> ${result}  </h1>`)
// // document.write(`<h2> ${result}  </h2>`)
// // document.write(`<h3> ${result}  </h3>`)
// // document.write(`<h4> ${result}  </h4>`)
// // document.write(`<h5> ${result}  </h5>`)
// // document.write(`<h6> ${result}  </h6>`)


// // } while (false ||   false) // false || false = false
// //isNaN(result) true -> not number -> true
// //isNaN(result) false ->  number -> false -> finish

// // result===""  true
// // result==="aaa" false

// document.write("<h1> hello </h1>")

//  ()
//  !
//  &&
//  ||