//mobile menu

var menuTop = document.querySelector(".menu-top"),
    burgerBtn = document.querySelector(".mobile-menu__burger");

function showMobileMenu(){
  menuTop.classList.toggle("menu-top__active");
  burgerBtn.classList.toggle("mobile-menu__burger_open");
}

burgerBtn.addEventListener("click", showMobileMenu);



//mobile open submenu
var menuItemMenu = document.querySelector("#menu-top__menu"),
    menuSubmenuMenu = document.querySelector("#menu-top__submenu-menu"),
    menuItemContacts = document.querySelector("#menu-top__contacts"),
    menuSubmenuContacts = document.querySelector("#menu-top__submenu-contacts");


$(window).resize(function() {
  if ($(window).width() < 768) {
    menuItemMenu.addEventListener("click", function(e){
      e.preventDefault();
      menuSubmenuMenu.classList.toggle("menu__submenu-show-menu");
    });
    menuItemContacts.addEventListener("click", function(e){
      e.preventDefault();
      menuSubmenuContacts.classList.toggle("menu__submenu-show-menu");
    });
    menuSubmenuMenu.classList.remove("menu__submenu_hover");
    menuSubmenuContacts.classList.remove("menu__submenu_hover");
  }
   else {
     menuItemMenu.removeEventListener("click", function(){});
     menuItemContacts.removeEventListener("click", function(){});
     menuSubmenuMenu.classList.add("menu__submenu_hover");
     menuSubmenuContacts.classList.add("menu__submenu_hover");
   }
});
