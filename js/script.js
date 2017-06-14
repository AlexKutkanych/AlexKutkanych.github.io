// alert("hello");

//sign-in form
var signInButton = document.getElementById("sign-in_button");
var signInForm = document.getElementsByClassName("signin-form")[0];
signInButton.addEventListener("click", function(){
    signInForm.style.display = "block";
});

var signInFormButton = document.getElementsByClassName("signin-form__button")[0];
var signInField = document.getElementById("signin-field");
var passwordField = document.getElementById("password-field");
signInFormButton.addEventListener("click", function(){
  if (signInField.value === "sasha" && passwordField.value == 12345) {
    alert("hello, Sasha");
  } else {
    alert('you are '+ signInField.value);
  }


  console.log(signInField);
});



console.log(signInField);
