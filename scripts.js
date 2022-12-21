
function mobileMenuDropdownToggle() {
   document.getElementById("dropdownButton").classList.toggle("show");
 }
 
 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdownContent");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

//  animated Numbers
const counters = document.querySelectorAll('.animatedNumber');

document.addEventListener('DOMContentLoaded', function(){
   var counters = document.querySelector('#number1');
})
window.onscroll = function(){
   var counters = document.querySelector('#number1');
   //TOP
   if(counters.getBoundingClientRect().top == 0){
      startCountup();
      removeEventListener;
  }	
 }	



 //BOTTOM
   // if(someElement.getBoundingClientRect().bottom <= 0){
   //    console.log("TRIGGER: bottom of div reached.");
   // alert('TRIGGER: bottom of div reached');
   // }


// Main function
function startCountup() {
   // var counters = document.querySelector('#number1');
      for(let n of counters) {
   const updateCount = () => {
      const target = + n.getAttribute('data-target');
      const count = + n.innerText;
      const speed = 100000; // change animation speed here
      const inc = target / speed; 
      if(count < target) {
         n.innerText = Math.ceil(count + inc);
         setTimeout(updateCount, 1);
      } else {
         n.innerText = target;
      }
   }
   updateCount();
   }
}
// for(let n of counters) {
//   const updateCount = () => {
//     const target = + n.getAttribute('data-target');
//     const count = + n.innerText;
//     const speed = 10000000000; // change animation speed here
//     const inc = target / speed; 
//     if(count < target) {
//       n.innerText = Math.ceil(count + inc);
//       setTimeout(updateCount, 1);
//     } else {
//       n.innerText = target;
//     }
//   }
//   updateCount();
// }