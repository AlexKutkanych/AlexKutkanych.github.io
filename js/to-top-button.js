//mobile submenu

var menuItem = document.querySelectorAll(".menu-top__menu-item")[1];
var menuSubMenu = document.querySelectorAll(".menu-top__submenu")[0];
var menuFuck = document.querySelectorAll(".menu-top__menu-link-underline")[1];

var menuTop = document.querySelector(".menu-top");
var burgerBtn = document.querySelector(".mobile-menu__burger");

function showMobileMenu(){
  menuTop.classList.toggle("active");
}

burgerBtn.addEventListener("click", showMobileMenu);

// menuFuck.addEventListener("click", function(e){
// });

menuItem.addEventListener("click", function(e){
    e.preventDefault();
    // menuSubMenu.style.position = "static";
    menuSubMenu.style.maxHeight = "1000px";
    // menuSubMenu.style.display = "block";
});

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
