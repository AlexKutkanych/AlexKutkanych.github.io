
//sign-in form
var joinUsBtn = document.querySelector("#join-us__btn"),
    joinUsModal = document.querySelector(".header-wrapper__registration"),
    closeJoinUsModalBtn = document.querySelector(".registration__close-btn"),
    newUserTabBtn = document.querySelector(".user-form-switch__new"),
    existingUserTabBtn = document.querySelector(".user-form-switch__existing"),
    existingUserForm = document.querySelector(".registration__login-form"),
    newUserForm = document.querySelector(".registration__signup-form");

console.log(newUserForm);

function showJoinUsModal(){
    joinUsModal.classList.toggle("header-wrapper__registration_show");
    joinUsBtn.classList.toggle("join-us__btn_active");
}

function closeJoinUsModal(){
  joinUsModal.classList.remove("header-wrapper__registration_show");
  joinUsBtn.classList.remove("join-us__btn_active");
  existingUserForm.classList.remove("show-user-form");
  existingUserTabBtn.classList.remove("user-form-switch__existing_active");
  newUserForm.classList.remove("show-user-form");
  newUserTabBtn.classList.remove("user-form-switch__new_active");
}

function showNewUserForm() {
  newUserForm.classList.toggle("show-user-form");
  existingUserForm.classList.remove("show-user-form");
  newUserTabBtn.classList.toggle("user-form-switch__new_active");
  existingUserTabBtn.classList.remove("user-form-switch__existing_active");
}

function showExistingUserForm() {
  existingUserForm.classList.toggle("show-user-form");
  existingUserTabBtn.classList.toggle("user-form-switch__existing_active");
  newUserForm.classList.remove("show-user-form");
  newUserTabBtn.classList.remove("user-form-switch__new_active");
}

joinUsBtn.addEventListener("click", showJoinUsModal);
closeJoinUsModalBtn.addEventListener("click", closeJoinUsModal);

existingUserTabBtn.addEventListener("click", showExistingUserForm);
newUserTabBtn.addEventListener("click", showNewUserForm);

// //form vakidation
//
// var signupBtn = document.querySelector(".signup-form__button"),
//     signupPhoneField = document.querySelector("#signup__pass-field");
//
// console.log(signupPhoneField);
//
// function check(){
//
//
// if(signupPhoneField.value == "hi") {
//   // signupBtn.classList.remove("disabled-btn");
//   alert("sdf");
// }
// }
//
// signupBtn.addEventListener("click", check);



// var signInButton = document.getElementById("sign-in_button");
// var signInForm = document.getElementsByClassName("signin-form")[0];
// signInButton.addEventListener("click", function(){
//     signInForm.style.display = "block";
// });
// var signInFormButton = document.getElementsByClassName("signin-form__button")[0];
// var signInField = document.getElementById("signin-field");
// var passwordField = document.getElementById("password-field");
// signInFormButton.addEventListener("click", function(){
//   if (signInField.value === "sasha" && passwordField.value == 12345) {
//     alert("hello, Sasha");
//   } else {
//     alert('you are '+ signInField.value);
//   }
//
//
//   console.log(signInField);
// });
