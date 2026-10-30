// 1:  Functional Scope
// 2:  Block Scope
// 3:  Globle Scope


// ****************** Functional Scope ******************
// function abcd() {
  // var a = "faiz";
// }

// ****************** Block Scope ******************



// ****************** Globle Scope ******************
// var a = 398947 ;

// ****************** Clusors ******************
messege = "Good Glooble";
function hello1() {
  let message = "Good Morning"
    // let message = "Good Afternoon"
    console.log("Hello 1: " + message);
  let c = function hello2() {
    console.log("i am c " + message);
  }
  return c 
}
c = hello1()
c()