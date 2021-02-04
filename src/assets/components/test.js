
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {myFunction()};

var navbar10 = document.getElementById("navbar10");
var sticky = navbar10.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar10.classList.add("sticky")
  } else {
    navbar10.classList.remove("sticky");
  }
}

})