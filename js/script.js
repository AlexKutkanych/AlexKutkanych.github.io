// function toLocalStorage(e){
//   e.preventDefault();
//   validateSignupForm();
//   addNewUser();
//   // for(var i = 0; i < 5; i++) {
//     allusers.push(addNewUser());
//
//     console.log(allusers);
//   // }
//   //write to localStorage
//   for (var i =0; i < allusers.length; i++){
//     var savedUser = localStorage.setItem("user"+[i], JSON.stringify(allusers[i]));
//   }
// }
//
//
// function addNewUser(){
//   //create new user
//   user = {
//     name: signupNameField.value,
//     email: signupEmailField.value,
//     password: signupPassField.value
//   };
//
//   return user;
//
// }
//
//
// function validateSignupForm(e){
//     // e.preventDefault();
//     if (!regexpUsername.test(signupNameField.value)) {
//       errors[errors.length] = "You must enter valid Name .";
//     }
//
//     if (!regexpEmail.test(signupEmailField.value)) {
//       errors[errors.length] = "You must enter a valid email address.";
//    }
//
//    if (!regexpPassword.test(signupPassField.value)) {
//       errors[errors.length] = "You must enter a valid Password ";
//    }
//
//    if (!regexpPassword.test(signupPassRepeatField.value)) {
//       errors[errors.length] = "You must enter similar Password ";
//    }
//     // checkPassRepeat();
//     addNewUser();
//
//   if (errors.length > 0) {
//     reportErrors(errors);
//     return false;
//   } else {
//     closeJoinUsModal();
//     clearSignupInputs();
//     alert("We sent you a link to prove email address. Check your email "+ signupEmailField.value);
//   }
//   errors = [];
//    return true;
// }
//
//
// function reportErrors(errors){
//   var msg = "Please Enter Valide Data...\n";
//   for (var i = 0; i<errors.length; i++) {
//    var numError = i + 1;
//     msg += "\n" + numError + ". " + errors[i];
//   }
//   alert(msg);
// }
//
// //clear signup inputs after registration
// function clearSignupInputs(){
//   for (var i = 0; i < allSignupInputs.length; i++){
//     allSignupInputs[i].value = "";
//   }
// }
//
// function showSentEmailModal(){
//
// }
