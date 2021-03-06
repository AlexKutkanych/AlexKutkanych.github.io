
//login

"use strict";

var loginNameField = document.querySelector("#login__name-field"),
    loginPassField = document.querySelector("#login__pass-field"),
    loginBtn = document.querySelector("#login__btn"),
    loggedUserBlock = document.querySelector(".header-wrapper__logged-user-section"),
    loggedUserGreetings = document.querySelector(".logged-user__greetings"),
    allLoginInputs = document.querySelectorAll(".login-form__wrapper > input"),
    loginAlertMessages = document.querySelectorAll(".login__alert-message"),
    allLoginInputsLen = allLoginInputs.length;

//login user

var loggedUser = localStorage.getItem("signedupUser"); //!!!GET THE RIGHT ITEM FROM localStorage
  var parseUserInfo = JSON.parse(loggedUser);
  console.log(loggedUser);

function loginUser(e){
  e.preventDefault();
  

  if (loginNameField.value !== parseUserInfo.name) {
    loginAlertMessages[0].classList.add("show-alert-message");
  } else {
    loginAlertMessages[0].classList.remove("show-alert-message");
  }

  if (loginPassField.value !== parseUserInfo.password) {
    loginAlertMessages[1].classList.add("show-alert-message");
  } else {
    loginAlertMessages[1].classList.remove("show-alert-message");
  }

  if(loginNameField.value === parseUserInfo.name && loginPassField.value === parseUserInfo.password) {
    alert("Welcome, "+ loginNameField.value);
    loggedUserGreetings.innerHTML = "hi, "+ loginNameField.value;
    loggedUserBlock.classList.add("header-wrapper__logged-user-section_show");
    clearLoginInputs();
    clearSignupInputs();
    closeJoinUsModal();
  } 

}

function clearLoginInputs(){
  for (var i = 0; i < allLoginInputsLen; i++){
    allLoginInputs[i].value = "";
  }
}


loginBtn.addEventListener("click", loginUser);


//logged user info block

var loggedUserName = document.querySelector(".logged-user-modal__username"),
    loggedUserEmail = document.querySelector(".logged-user-modal__email"),
    loggedUserModal = document.querySelector(".header-wrapper__logged-user-modal");

function showLoggedUserInfo(){
    loggedUserModal.classList.toggle("header-wrapper__logged-user-modal_show");
    loggedUserName.innerHTML = parseUserInfo.name;
    loggedUserEmail.innerHTML = parseUserInfo.email;
}

loggedUserBlock.addEventListener("click", showLoggedUserInfo);

//logout

var logoutBtn = document.querySelector("#logout-btn");

function logoutUser(e){
  e.preventDefault();
  loggedUserBlock.classList.remove("header-wrapper__logged-user-section_show");
  loggedUserModal.classList.remove("header-wrapper__logged-user-modal_show");
}

logoutBtn.addEventListener("click", logoutUser);