// *************************event lishner.
//#####1️⃣ button bakahround color change on one click.**************** 
// let button = document.querySelector("button");

//chang text***
// button.addEventListener("click", function () {
//   button.style.color = "blue";
// });
// -----------------------------------------  

// button.addEventListener("click", function () {
//   button.style.backgroundColor = "red";
// });
// ==========================================

//#####2️⃣(input ma type karana sa input ma data ayy gha jo input ma type kia ho gha. orr per bahkspace per null ayy gha.)****************
//1: -----------------------------------------
// let inp = document.querySelector("input");

// inp.addEventListener("input", function(dets) {
//   console.log(dets.data);
// })

//2: -----------------------------------------
// ****(bask sapce per karana sa null nahi ayy gha ok.)
// let inp = document.querySelector("input");

// inp.addEventListener("input", function(dets) {
//   if (dets.data !== null) {
//     console.log(dets.data);
//   }
// })

//     const form = document.querySelector("form");
//     form.addEventListener("submit", function (dets) {
//   dets.preventDefault();
//   console.log(inputs[0].value + " " + inputs[1].value + " " + inputs[2].value + " " + inputs[3].value );
// }

// mouseover and mouseout event lishner.****************
// let buuu = document.querySelector(".buuu");

// buuu.addEventListener("mouseover", function () {
//     buuu.style.backgroundColor = "blue";
//   }
// );
// buuu.addEventListener("mouseout", function () {
//     buuu.style.backgroundColor = "yellow";
//   }
// );

// mousemove event lishner.****************
// when position is absolute in css then mousemove event lishner work.****************
let buuu = document.querySelector(".buuu");

window.addEventListener("mousemove", function (dets) {
  buuu.style.top = dets.clientY + "px";
  buuu.style.left = dets.clientX   + "px";
});
