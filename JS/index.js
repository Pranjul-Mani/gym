// 1. ways to print in javascript
// console.log("hello world");
// alert("me");
// document.write("this is document write")

// 2. javascript console API
// console.log("hello world");
// console.warn("hello warn");
// console.error("hello error");


// 3. javascript variables
// containers to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);


// 4. Data types in JS

// numbers
var num1 = 34;
var num2 = 56.23;

//strings
var str1 = "This is a string";
var str2 = "This is also a string";
//console.log(str1, str2)


//objects
var marks = {
    ravi: 34,
    subham: 56,
    harry: 90
}
// Booleans
var a = true;
var b = false;
//console.log(a,b);


// var und = undefined;
var und;
//console.log(und);


var n = null;
//console.log(n);

// At a very high level, there are two types of data types in Js
// 1. Primitive data type:undefined , null, number,string , boolean, Symbol
// 2. Reference data type: arrays and objects

var arr = [1, 2, "pm", 4, 5]
//console.log(arr)


// Operators in Js

// arithmetic operators
var a = 23;
var b = 28;
// console.log("The value of a + b is ", a + b);
// console.log("The value of a - b is ", a - b);
// console.log("The value of a * b is ", a * b);
// console.log("The value of a / b is ", a / b);

// assignment operators
var c = b;
// c += 2;
// c -= 2;
// c /= 2;
// console.log(c);

// comparison operators
// var x =34;
// var y =56;
// console.log( x==y)
// console.log( x>=y)
// console.log( x<y)

// Logical operators
//AND
// console.log( true && true);
// console.log( true && false);
// console.log( false && false);

//OR
// console.log( true|| true);
// console.log( true|| false);
// console.log( false || false);
// console.log( true|| true);

//Logical NOT 
// console.log(!false);
// console.log(!true);

// Function in JS
//Dry = Do not repeat yourself 
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditional statements
var age = 53;
// single if statement
// if (age >18){
//     console.log(" You can vote")
// }

//if- else statements
// if (age >18){
//     console.log(" You can vote")
// }
// else {
//     console.log(" You cannot vote")
// }

//if-else ladder
// age = 4
// if(age>33){
//     console.log("you are not a kid ");
// }
// else if(age>45){
//     console.log("bache ni rhe");
// }
// else if(age>20){
//     console.log("bache ni rhe ");
// }
// else{
//     console.log("bacche ho ");
// }

//loops 
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for( var i = 0; i<arr.length;i++){
//     if (i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element)
// {
//     console.log(element)
// })

let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["fan","camera",34,null,true];
//array methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("pranjul");
//myArr.shift() /*removes first element*/
// const newLen = myArr.unshift("pranjul")
// console.log(newLen);
// console.log(myArr);


//String methods in JS
let mystring = "pranjul is a good boy";
// console.log(mystring.length)
// console.log(mystring.indexOf("good"))
// console.log(mystring.lastindexOf("good"))

// console.log(mystring.slice(1,4)
d = mystring.replace("pranjul","pranjal");
// console.log(d,mystring)


mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName("div")
console.log(tn)

