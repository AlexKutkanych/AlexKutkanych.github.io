//to top button

"use strict";

window.onscroll = function(){
	scrollScreen();
};

var html = document.querySelector("html");
var toTopButton = document.querySelector("#to-top-button");

function scrollScreen(){
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
