//login

var loginPhoneField = document.querySelector("#login__phone-field");
var loginPassField = document.querySelector("#login__pass-field");
var loginBtn = document.querySelector("#login__btn");

var values = [];

function allStorage() {

        var keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

allStorage();

// var parse = JSON.parse(values);
// for (var i = 0; i < localStorage.length; i++){
//   parse =
// }

console.log(values);




//create array for users info
// var usersList = localStorage.getItem("1");
// var parseList = JSON.parse(usersList);
// console.log(parseList.phone);
//
//
//
// function checkUser(e){
//   e.preventDefault();
//     if(loginPhoneField.value == parseList.phone) {
//       console.log("hello " + loginPhoneField.value);
//     } else {
//       console.log("goodbye");
//     }
// }
//
//
// loginBtn.addEventListener("click", checkUser);
