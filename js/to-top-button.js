//mobile submenu






//to top button

window.onscroll = function(){scrollScreen();};

var html = document.getElementsByTagName("html")[0];
var toTopButton = document.getElementById("to-top-button");
console.log(html);

function scrollScreen(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
