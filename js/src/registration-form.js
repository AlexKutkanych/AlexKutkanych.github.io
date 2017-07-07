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
  for (var i = 0; i < signupAlertMesLength; i++){
    signupAlertMessages[i].classList.remove("show-alert-message");
  }
  for (var k = 0; k < loginAlertMesLength; k++){
    loginAlertMessages[k].classList.remove("show-alert-message");
  }
}

function showExistingUserForm() {
  existingUserForm.classList.toggle("show-user-form");
  existingUserTabBtn.classList.toggle("user-form-switch__existing_active");
  newUserForm.classList.remove("show-user-form");
  newUserTabBtn.classList.remove("user-form-switch__new_active");
  for (var i = 0; i < signupAlertMesLength; i++){
    signupAlertMessages[i].classList.remove("show-alert-message");
  }
  for (var j = 0; j < loginAlertMesLength; j++){
    loginAlertMessages[j].classList.remove("show-alert-message");
  }
}

//clear signup inputs after registration
function clearSignupInputs(){
  for (var i = 0; i < allSignupInputsLength; i++){
    allSignupInputs[i].value = "";
  }
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
    signupAlertMessages = document.querySelectorAll(".signup__alert-message"),
    confirmEmailModal = document.querySelector(".header-wrapper__registration-confirm-modal"),
    regexpUsername = /^[A-Za-z0-9_]{3,20}$/,
    regexpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    regexpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    errors = [],
    allSignupInputs = document.querySelectorAll(".signup-form__wrapper > input"),
    // allUsers = [];
    //length variables
    signupAlertMesLength = signupAlertMessages.length,
    loginAlertMesLength = loginAlertMessages.length,
    allSignupInputsLength = allSignupInputs.length;


function addNewUser(){
  //create new user
  var newUser = {};
  newUser.name = signupNameField.value;
  newUser.email = signupEmailField.value;
  newUser.password = signupPassField.value;
  return newUser;
}


function validateSignupForm(){
    
  //validate username
  if (!regexpUsername.test(signupNameField.value)) {
    signupAlertMessages[0].classList.add("show-alert-message");
  } else {
    signupAlertMessages[0].classList.remove("show-alert-message");
  }

  //validate email
  if (!regexpEmail.test(signupEmailField.value)) {
    signupAlertMessages[1].classList.add("show-alert-message");
  } else {
    signupAlertMessages[1].classList.remove("show-alert-message");
  }

  //validate password
  if (!regexpPassword.test(signupPassField.value)) {
    signupAlertMessages[2].classList.add("show-alert-message");
  } else {
    signupAlertMessages[2].classList.remove("show-alert-message");
  }

  //validate password[1]
  if (!regexpPassword.test(signupPassRepeatField.value)) {
    signupAlertMessages[3].classList.add("show-alert-message");
  } else {
    signupAlertMessages[3].classList.remove("show-alert-message");
  } 

  //validate if paswords are equal
  if (signupPassField.value !== signupPassRepeatField.value || signupPassRepeatField.value == "") {
    signupAlertMessages[3].classList.add("show-alert-message");
  }
  else {
    signupAlertMessages[3].classList.remove("show-alert-message");
  }
}

function toLocalStorage(e){
  e.preventDefault();
  validateSignupForm();

  if (regexpUsername.test(signupNameField.value) && regexpEmail.test(signupEmailField.value) && 
   regexpPassword.test(signupPassField.value) && regexpPassword.test(signupPassRepeatField.value)
   && signupPassField.value === signupPassRepeatField.value) {
     var signedupUser = addNewUser();
    console.log(signedupUser);
     // write to localStorage
       localStorage.setItem("signedupUser", JSON.stringify(signedupUser));

     showSentEmailModal();
     closeJoinUsModal();
   }
   
}

function showSentEmailModal(){
    var confirmEmailText = confirmEmailModal.querySelector(".registration-confirm-modal__text");
    confirmEmailText.innerHTML = "Dear "+ signupNameField.value + "! "+ "We sent you a link to prove email address. Check your email "+ signupEmailField.value;
    confirmEmailModal.classList.add("header-wrapper__registration-confirm-modal_animate-fading");
}

signupBtn.addEventListener("click", toLocalStorage);


//prevent enter key press from form submition

function stopEnterKey(e) { 
  if (e.keyCode == 13)  {
    return false;
  } 
} 

joinUsModal.onkeypress = stopEnterKey;