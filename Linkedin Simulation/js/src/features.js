var mainPage = document.querySelector("#main-page");
var profilePage = document.querySelector("#profile-page");
profilePage.classList.add("profile-page_hide");


//to main page

function showMainPage(){
    mainPage.classList.remove("main-page_hide");
    profilePage.classList.add("profile-page_hide");
    skillsResult.innerHTML = "";
}

var toMainPageBtn = document.querySelector("#to-main-page");
toMainPageBtn.addEventListener("click", showMainPage);


//to top btn

var burgerMenuIcon = document.querySelector("#burger-icon");
var topMenu = document.querySelector(".top-menu");

burgerMenuIcon.addEventListener("click", function(){
    burgerMenuIcon.classList.toggle("open");
    topMenu.classList.toggle("top-menu_open");
})


window.onscroll = function(){
    scrollScreen();
};

var html = document.querySelector("html");
var toTopButton = document.querySelector("#to-top-button");

function scrollScreen(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}
