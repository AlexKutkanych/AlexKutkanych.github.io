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

var signupPhoneField = document.querySelector("#signup__phone-field");
var signupEmailField = document.querySelector("#signup__email-field");
var signupPassField = document.querySelector("#signup__pass-field");
var signupPassRepeatField = document.querySelector("#signup__pass-repeat-field");
var signupBtn = document.querySelector("#signup__btn");

//create array for users info
var userInfo = [];

//check if password entered two time
function checkPassRepeat(){
    if(signupPassField.value !== signupPassRepeatField.value) {
      alert("wrong");
    }
}
var user;

function addNewUser(e){
  e.preventDefault();
  // checkPassRepeat();
  //create new user
    user = {
      phone: signupPhoneField.value,
      email: signupEmailField.value,
      password: signupPassField.value
    };

    userInfo.push(user);
    console.log(userInfo);
    // var counter = 0;
    for (var i =0; i < 10; i++){
      localStorage.setItem("user"+i, JSON.stringify(userInfo[i]));

    }
    // counter++;
  // counter++;

  //push to userInfo array
  //write to localStorage
  // var parseO = JSON.parse(str);
  // console.log(parseO);

  // var info = JSON.parse(str);
  // console.log(info);
}


signupBtn.addEventListener("click", addNewUser);
