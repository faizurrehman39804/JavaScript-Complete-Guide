// External JavaScript definition:
// alert('This is an external JavaScript alert!');

// const { futimes } = require("node:fs");

// const { log } = require("node:console");
// const { userInfo } = require("node:os");
// ⭕⭕⭕✨✨✨variables in JavaScript
// 1️⃣var
// var a = "hooo";
// console.log(a);

// 2️⃣let 
// let b = "hooo";
// console.log(b);

// let c = "hooo";
// console.log(c);

//3️⃣const `
// const d = "hooo";
//  d = "hooo";
// const d = "hooo";
// console.log(d);

//⭕⭕⭕✨✨✨4️⃣Data Types
// var x = "faiz ur rehman";
// var x = 30;  
// var x = true;  
// var x = null;
// var x = undefined;
// var x = ["faiz ur rehman", "Peter", "true", "null", "undefined"];

// document.write(x);

//⭕⭕⭕✨✨✨5️⃣Arithmetic Operators
// +
// var a = 5;
// var b = 5;
// var sum = a + b;

// document.write(sum);

// -
// var a = 15;
// var b = 5;
// var sum = a - b;
// 
// document.write(sum);

// *division {5x5=25}
// var a = 5;
// var b = 5;
// var sum = a * b;
// document.write(sum);

// /division {}

//⭕⭕⭕✨✨✨5️⃣comparison Operators 
// 1️⃣ == equal to{check da value only}
// var a = 5;
// var b = 5;//true
// var b = "6";//false
// document.write(a == b);
// --------------------------------------------------------------------------
// 2️⃣ === equal value and equal type hona cahia 
// var a = 5;
// var b = "5";// false
// var b = 5;// true
// document.write(a === b);
// --------------------------------------------------------------------------
// 3️⃣ != not equal to
// var a = 5;
// var b = 5;// false
// var b = 6;// true
// document.write(a != b);
// --------------------------------------------------------------------------
// 4️⃣ !== not equal value or not equal type
// var a = 5;
// var b = "5";// true
// var b = 5;// false
// document.write(a !== b);
// --------------------------------------------------------------------------
// 5️⃣ > greater than
// var a = 5;
// var b = 6;//false
// var b = 4;//true
// document.write(a > b);
// --------------------------------------------------------------------------
// 6️⃣ < less than
// var a = 5;
// var b = 6;//true
// var b = 4;//false
// document.write(a < b);
// --------------------------------------------------------------------------
// 1️⃣if % else satatment 
// var a = 5;
// var b = "5";

// if (a === b) {
// if (a < b){
//   alert("a is greater than b");
// } else {
//   alert("opsssssssssss");
// }
// --------------------------------------------------------------------------
//⭕⭕⭕✨✨✨6️⃣Logical Operators
//  && operator in 
// var x = 5;
// var y = 7;

// document.write(x > 3 && y > 5); // true
// document.write(x > 3 && y > 9); // false
// --------------------------------------------------------------------------
// || operator
// var x = 5;
// var y = 7;

// document.write(x > 3 || y > 9); // true 1 value sahi ha 
// document.write(x < 3 || y < 5); // false 2 ghalat ha
// --------------------------------------------------------------------------
// ! operator
// var x = 5;
// var y = 7;

// document.write(!(x > 3)); // false
// document.write(!(y > 9)); // true
// ⭕⭕⭕✨✨✨6️🔟if else satatment
// let a = 5;
// let b = 10;

// if (a > b) {
//   document.write("a is less");
// }else 
//  document.write("b is greater");


// let a = "100";// string return error
// let a = 100;// same data type correct
// let b = 100;

// if (a === b) {
//   document.write("a is equal to b and same type");
//  }else 
//   document.write("b is equal to a but not same type");

// if esle if satatment eaxcpale like sfterwer
// let age = 19;

// if (age < 18) {
//   document.write("20% discount");
// } else if (age >= 18 && age <= 20) {
//   document.write("10% discount");
// } else {
//   document.write("No discount");
// }

// ternary operator
// var age = 19;
// var x = 10;
//   x = (age < 20) ? "True" :  "false"; 

// document.write(x);


// switch statement
// var day = 2;

// switch (day) {
//   case 1:
//     document.write("Monday");
//     break;
//   case 2:
//     document.write("Tuesday");
//     break;
//   case 3:
//     document.write("Wednesday");
//     break;
//   default:
//     document.write("Invalid day");
// }


// ⭕⭕⭕✨✨✨1️⃣4️⃣Alert and Prompt
// alert("This is an external JavaScript alert!");

// var a = "17";
// var b = "17";

// if(a === b) {
//   alert("a is equal to b and same type");
// } else {
//   alert("b is corect")
// }

// var a = confirm("Do you want to continue?");
// alert(a);

// if (a) {
//   alert("You chose to continue!");
// } else {
//   alert("sorry for that!");
// }

var name = "fiaz ur rehman";

if (name === "fiaz ur rehman") {
  alert("Welcome, faiz ur rehman!");
} else {
  alert("Welcome, guest!");
}

// function fullname(firstname="Faiz", lastname ="Ur Rehman") {
//     var a = firstname + " " + lastname;
//     document.write(a);

    // return a;
  // }
  
  // fullname();
  // let x = document.write(fullname());

//  function add(a, b) {
//   document.write(a + b);
//   return a + b;
//  }
//  let sum = add(5, 10);
//  document.write(sum);
// 


// function greet(x,y) {
//   document.write("");
// }

// ifie function
// (function name() {
  
// })();



// abc();





//  function abc() {
//   console.log("hahaha");
// }




// slice metde--------------------------------------
// let array = [1, 2, 3, 4, 5];

// let a = array.slice(0, 3);

// console.log(a); // Output: [1, 2, 3]
// console.log(a); // Output: [1, 2, 3]
// console.log(a); // Output: [1, 2, 3]


// splice method--------------------------------------
// let array = [1, 2, 3, 4, 5];

// let a = array.slice(2, 3);

// console.log(a); // Output: [3]
// console.log(a); // Output: [3]
// console.log(a); // Output: [3]


// const arr = [1, 2, 3, 4, 5,6 ];

// const result = arr.map  (x => x * 2);

// console.log(result); // [2, 4, 6]

// ************************ Return value************************
// function sum(x , y) {
//   return x + y;
// }

// document.write(sum(2 , 3));
// function sum(x , y) {
//   let sum = x + y;
//   return sum;
  
// }

// document.write(sum(5, 10));
// document.write(sum(23923, 10));

// ********************************************************
// let inp = document.querySelector("input");

// inp.addEventListener("input", function (dtal) {
//   console.log(dtal);====> input event ka data deta ha

// });
//Template Literal************************************************************************
// let val = ` ${5 + 10}`;
// let val2 = 3 + 2;

// console.log(val);
// console.log(val2);
//end

// var a = 5;
// var b = "faiz ur rehman";

// console.log(`your number is ${a} and my name is ${b}`);
//end

//complex way.
// var a = 5;
// var b = 10;

// console.log(5 + 10 + "faiz ur rehman"); // Output: "15faiz ur rehman"
// console.log("faiz ur rehman" + 5 + 10); // Output: "faiz ur rehman510"
//end


// let a = 2;

// while (a < 10) {
//   console.log(a);
//   a++;
// }

//*************************************Function */
// function add(params) {
//   console.log(`add function is called ${params}`);  
// } 
// add("mee i am faiz ur rehman.");


// arrow function vs normal function
// const addArrow = (a, b) => a + b;
// function add(a, b) {
  // return a + b;
  // console.log(20 + 20);
  
// }
// add(5, 10); // Output: 15

// console.log(addArrow(5, 10)); // Output: 15


// const greet = (name) => "Hello, " + name + "!";

// function User(username, loginCount, isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;
// }

// const userone = new User("name", "faiz ur rehman", "age", 19);
// const usertwo =  User("name", "ali", "age", 25);

// console.log(userone);
// console.log(usertwo);


// function () {
  
// }

// const greet = () => {
  
// }

// document.querySelector("h1").addEventListener("click", function () {
//     console.log("hihihihi");
// });


// const a = {
// fullname: "faiz ur rehman",
// age: 19,
// print: function () {
//   console.log(this.age);  
// },
// };

//this keyword / prototype **************************aray ka ander ju ander gu property defuine ho ghy oss ko this keyword se access kr skty ha.ess ka bagher oss ko pata nahi chal gha orr erre ayy gha.

// const student = {
//   fullname: "faiz ur rehman",
//   age: 19,
//   printage : function () {
//     console.log("age = " , this.age); 
//   },
// }

// const id = {
//   name: "faiz ur rehman",
//   id : 222,
//   printMarks: function () {
//     console.log("id = ", this.id);
//     },
// }

//***********************prototype __proto__ to assign the student value to studnet2 thorgh the __proto__.***********************.
// const student = {
//   name: "fiaz ur rehman",
//   age: 28,
//   printage :function () {
//     console.log("age =", this.age);
//   } 
// } 

// const student2 = {
//   name: "Roze lokin",
//   age: 20,
// }
// const student3 = {
//   name: "Roze lokin",
//   age: 20,
// }
// const student4 = {
//   name: "Roze lokin",
//   age: 20,
// }
// const student5 = {
//   name: "Roze lokin",
//   age: 20,
// }

// student2.__proto__=student;//assing the value student value to student2 __proto__.
// student3.__proto__=student;
// student4.__proto__=student;
// student5.__proto__=student;



>>>>>>> 0275cc8 (Update code)
