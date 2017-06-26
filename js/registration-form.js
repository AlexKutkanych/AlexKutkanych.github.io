//registration

//appearance

var joinUsBtn = document.querySelector("#join-us__btn"),
    joinUsModal = document.querySelector(".header-wrapper__registration"),
    closeJoinUsModalBtn = document.querySelector(".registration__close-btn"),
    newUserTabBtn = document.querySelector(".user-form-switch__new"),
    existingUserTabBtn = document.querySelector(".user-form-switch__existing"),
    existingUserForm = document.querySelector(".registration__login-form"),
    newUserForm = document.querySelector(".registration__signup-form");


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
  clearSignupInputs();
  clearLoginInputs();
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

//sign-up

var signupNameField = document.querySelector("#signup__name-field"),
    signupEmailField = document.querySelector("#signup__email-field"),
    signupPassField = document.querySelector("#signup__pass-field"),
    signupPassRepeatField = document.querySelector("#signup__pass-repeat-field"),
    signupBtn = document.querySelector("#signup__btn"),
    regexpUsername = /^[A-Za-z0-9_]{3,20}$/,
    regexpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    regexpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    errors = [],
    allSignupInputs = document.querySelectorAll(".signup-form__wrapper > input"),
    user;


//check if password entered two time
// function checkPassRepeat(){
//     if(signupPassField.value !== signupPassRepeatField.value) {
//       signupPassField.style.border = "2px solid red";
//       signupPassRepeatField.style.border = "2px solid red";
//       alert("Password fields don't match");
//     }
// }



function addNewUser(){
  //create new user
  user = {
    name: signupNameField.value,
    email: signupEmailField.value,
    password: signupPassField.value
  };

  //write to localStorage
  var local = localStorage.setItem("user", JSON.stringify(user));
  console.log(local);
}

function validateSignupForm(e){
    e.preventDefault();
    if (!regexpUsername.test(signupNameField.value)) {
      errors[errors.length] = "You must enter valid Name .";
    }

    if (!regexpEmail.test(signupEmailField.value)) {
      errors[errors.length] = "You must enter a valid email address.";
   }

   if (!regexpPassword.test(signupPassField.value)) {
      errors[errors.length] = "You must enter a valid Password ";
   }

   if (!regexpPassword.test(signupPassRepeatField.value)) {
      errors[errors.length] = "You must enter similar Password ";
   }
    // checkPassRepeat();

    addNewUser();
    clearSignupInputs();

  if (errors.length > 0) {
    reportErrors(errors);
    return false;
   }
   return true;
}

function reportErrors(errors){
  var msg = "Please Enter Valide Data...\n";
  for (var i = 0; i<errors.length; i++) {
   var numError = i + 1;
    msg += "\n" + numError + ". " + errors[i];
  }
  alert(msg);
}

function clearSignupInputs(){
  for (var i = 0; i < allSignupInputs.length; i++){
    allSignupInputs[i].value = "";
  }
}



signupBtn.addEventListener("click", validateSignupForm);
