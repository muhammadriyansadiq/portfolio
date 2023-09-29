
// ===============humberg====================
var humbergexpanders = document.getElementById("humbergexpander")
var opens = document.getElementById("humbergstyle")
var closed = document.getElementById("humbergclose")
var croossbtn = document.getElementById("humbergclose")
var crosshoja = document.getElementById("humbergclose")

opens.addEventListener("click", function() {
  humbergexpanders.classList.add("humbergexpander")
  croossbtn.classList.add("humbergclose")

   })

   croossbtn.addEventListener("click",function() {

    humbergexpanders.classList.remove("humbergexpander")
    crosshoja.classList.remove("humbergclose")

   } )
  
  

// // Setting up the Variables
// var bars = document.getElementById("nav-action");
// var nav = document.getElementById("nav");
// //setting up the listener
// bars.addEventListener("click", barClicked, false);
// //setting up the clicked Effect
// function barClicked() {
//   bars.classList.toggle('active');
//   nav.classList.toggle('visible');
// }




















