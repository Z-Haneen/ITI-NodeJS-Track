// ▪ Case sensitive  userName != UserName (different)
// ▪ Object-based    all types inside JS are (objects) instead of primitive datatypes (object oriented based )
// ▪ Event-Driven    events (buttons - actions)
// ▪ Browser-Dependent  browser
// ▪ Interpreted language   -> line BY line (command by command)
// ▪ Dynamic       detect datatype dynamic + change datatype dynamic


// DOM Document Object Model
// BOM Browser Object Model

// print
// console.log('ahmed')
// right click -> inspect -> console


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// variables
// Datatypes   (primitive - non-primitive)

// 01- primitive (store single value)

// 01- string
// var myName = "ali";
// console.log(typeof myName);   //string
// console.log(myName);          //ali

// //  02- number
// var myAge = 26;
// console.log(typeof myAge)
// console.log(myAge)

// //  03- boolean (true / false);
// var isActive = false;
// console.log(typeof isActive)
// console.log(isActive)

// //  04- undefined
// var x;
// console.log(typeof x)
// console.log(x)

// //  05- null
// var y = null;
// console.log(typeof y)
// console.log(y)

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 02- non-primitive (store multi values)
// // all typeof non-primitive (object)

// // 01-array
// var myArray = [1, 2, 3, 4, 5];
// console.log(typeof myArray)
// console.log(myArray)

// // 02-object
// var myObj = { a: 1, b: 2, c: 3 };
// console.log(typeof myObj);
// console.log(myObj);


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Arithmetic Operators
// var num1 = 10;
// var num2 = 20;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)


// String Concatenation

// var str1 = "ahmed";
// var str2 = "salem";

// var fullName = str1 + " " + str2;

// console.log(fullName);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Type Coercion

// console.log(10 + 5);   //number
// console.log(10 + 'ali'); //string
// console.log('ali' + 10);   //string
// console.log("ali" + "ahmed")   //string

// console.log("10" + 5);   //string
// console.log("10" + "5");   //string


// console.log(10 - 5);
// console.log(10 - "ali"); //NaN
// console.log(typeof NaN)
// console.log(10 - " 5");
// console.log(10 - "a");


// console.log(false + "ahmed");
// console.log(null + "ahmed");
// console.log(null + "10");

// true = 1
// false = 0
// null = 0
// console.log(false - "ali"); // 0 - ali = NaN
// console.log(false - 10);
// console.log(null - 10);


// isNaN(value)  -> check if value is not a number
// isFinite(value)  -> check if value is  a number
// true / false

// isNaN & isFinite :
// 01- Type Coercion  -> try to change type to number
// 02- Check the value

console.log(isNaN(10)); //false
console.log(isNaN("10")); //isNaN(10); //false

console.log(isNaN("ali"));//isNaN(xxxxx) //true

console.log(isFinite(10)); //true
console.log(isFinite("10")); // isFinite(10) // true
// console.log(isFinite("ali")); //false