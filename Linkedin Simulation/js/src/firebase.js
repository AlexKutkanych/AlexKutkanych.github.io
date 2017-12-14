/// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKoaYzp2gMW7adK1GnOf5b4LWL6n0SuoU",
    authDomain: "js-task2-4fa65.firebaseapp.com",
    databaseURL: "https://js-task2-4fa65.firebaseio.com",
    projectId: "js-task2-4fa65",
    storageBucket: "",
    messagingSenderId: "1028001953359"
  };
  firebase.initializeApp(config);

//JQuery
//
// $(document).ready(function(){
//
//     var hadlebarsTest = $("#test").html();
//     var compiledTest = Handlebars.compile(hadlebarsTest);
//     var experienceBl = $(".experience-block");
//     console.log(compiledTest);
//
//
//     var dbRef = firebase.database().ref();
//
//     if($("body").hasClass(".body-test")){
//         experienceBl.html(compiledTest);
//     } else {
//         dbRef.on("value", function(snap){
//             experienceBl.html(compiledTest(snap.val()));
//             console.log(snap.val());
//         })
//     }
// })


var developersGrid = document.querySelector("#developers-grid");
var developersName = document.querySelectorAll(".developer-name");
var developersPicture = document.querySelectorAll(".developer-picture");
var skillsResultBlock = document.querySelector("#skills-result");


//handlebars on JS

var hadlebarsExperienceBl = document.querySelector("#experience-block").innerHTML;
var compiledExperienceBl = Handlebars.compile(hadlebarsExperienceBl);
var experienceBl = document.querySelector("#experience-temp");


var hadlebarsEducationBl = document.querySelector("#education-block").innerHTML;
var compiledEducationBl = Handlebars.compile(hadlebarsEducationBl);
var educationBl = document.querySelector("#education-temp");

var perObj = document.querySelector("#object");
var dBRefObject = firebase.database().ref().child("users");

//connecting developers pictures to info in dbs

dBRefObject.on("value", function(snap) {
    var usersInfo = snap.val();

    for(var i = 0; i < developersName.length; i++){
        developersName[i].innerHTML = usersInfo[i].name;
        developersPicture[i].setAttribute("data-name", usersInfo[i].name);
    }
});



function showDevelopersProfile(e){

    if(e.target != e.currentTarget){
       
        mainPage.classList.add("main-page_hide");
        profilePage.classList.remove("profile-page_hide");


  
        dBRefObject.on("value", function(snap) {
            var usersInfo = snap.val();
            var clickedItem = e.target.getAttribute("data-name");
            
    //showing page of the clicked user

            for(var j = 0; j < usersInfo.length; j++){

                if(clickedItem === usersInfo[j].name){
                    var loadedUser = snap.val()[j];
                    experienceBl.innerHTML = compiledExperienceBl(loadedUser);
                    console.log(loadedUser);

                    //education block

                    educationBl.innerHTML = compiledEducationBl(loadedUser);

                    //skills block

                    var usersSkills = loadedUser.skills[0];
                    var skillsResult = document.querySelector("#skills-result");

                    for (var key in usersSkills){


                        skillsResult.innerHTML += "<div class='skills-result__bar' style='width:" + usersSkills[key] + "%'>" +
                            "<span class='skills-result__skill-name'>" + key + "<span>" + "</div>";

                        // skillBar.style.width = key + "%";
                        // skillBar.appendChild(skillScore);
                        // skillsResultBlock.appendChild(skillBar);
                    }

                }

            }
        });

    }
    e.stopPropagation();

};

developersGrid.addEventListener("click", showDevelopersProfile, false);




