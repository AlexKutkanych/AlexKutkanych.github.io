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
    console.log(usersInfo);

    for(var i = 0; i < usersInfo.length; i++){
        developersName[i].innerHTML = usersInfo[i].name;
        developersPicture[i].setAttribute("data-name", usersInfo[i].name);
    }
});


// function updatePosition(userId, pos) {
//   firebase.database().ref(`users/${userId}`).update({
//     position: pos,
//   });
//   console.log(userId);
// }
//
// updatePosition(0, 'BA');


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

                    //set user name on page

                    var userName = document.querySelector("#user-name");
                    userName.innerHTML = loadedUser.name;
                    userName.setAttribute('data-id', j);
                    experienceBl.innerHTML = compiledExperienceBl(loadedUser);

                    //education block
                    educationBl.innerHTML = compiledEducationBl(loadedUser);

                    //skills block
                    var usersSkills = loadedUser.skills[0];
                    var skillsResult = document.querySelector("#skills-result");
                    var skillsId = document.getElementsByClassName("skills-result__bar");
                    var skillsIdArr = [];
                    var length = skillsId.length;
                    for(var j = 0; j < length; j++){

                        skillsIdArr.push(skillsId[j].id);
                    }

                        for(var key in usersSkills){
                          skillsResult.innerHTML += `<div id=${key} class='skills-result__bar' style='width:${usersSkills[key]}%'>
                            <span class='skills-result__skill-name'>${key}<span></div>`;
                          }


                    }
                }
        });

    }
    e.stopPropagation();

};

developersGrid.addEventListener("click", showDevelopersProfile, false);


var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

// bind filter button click
$('.filters-button-group').on( 'click', 'span', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'span', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});
$grid.isotope({ filter: '.web-designer' });
$grid.isotope({ filter: '.coder' });



$grid.isotope({ filter: '*' });

//add skills

var addSkillsBtn = document.querySelector("#add-skill-btn");
var skillsResult = document.querySelector(".skills-result");
var skillsInput = document.querySelectorAll(".skills-input");

var skillNameInput = document.querySelector("#skill-name");
var skillRangeInput = document.querySelector("#skill-range");

var skillNameErrorMsg = document.querySelector(".skills-name__error-message");
var skillRangeErrorMsg = document.querySelector(".skills-range__error-message");


function checkSkillNameLen(){
    if(skillNameInput.value.length > 100) {
        skillNameErrorMsg.style.display = "block";
    } else {
        skillNameErrorMsg.style.display = "none";
    }
}

function checkSkillRangeLen(){
    if(skillRangeInput.value > 100 || isNaN(+skillRangeInput.value)){
        skillRangeErrorMsg.style.display = "block";
    } else {
        skillRangeErrorMsg.style.display = "none";
    }
}

// dBListSkills.on('child_added', function(snap){
//   console.log(snap.val());
// })

function addNewSkillBar() {
    checkSkillNameLen();
    checkSkillRangeLen();
    if (skillNameInput.value.length <= 100 && Number(skillRangeInput.value) <= 100 && skillNameInput.value.length !== 0
        && skillRangeInput.value.length !== 0) {
        var skillBar = document.createElement("div");
        skillBar.classList.add("skills-result__bar");
        skillBar.style.width = skillRangeInput.value + "%";
        var skillName = document.createElement("span");
        skillName.classList.add("skills-result__skill-name");
        skillName.innerHTML = skillNameInput.value;
        skillBar.appendChild(skillName);
        skillsResult.appendChild(skillBar);
        var userName = document.querySelector("#user-name");
        var userIdentification = userName.dataset.id;

        var t = skillNameInput.value;
        var b = skillRangeInput.value;

        // var dBListSkills = firebase.database().ref().child(`users/${userIdentification}`).child("skills/0");
        //
        // dBListSkills.update({
        //   [t]: b
        // })


        // dBListSkills.push({t: b});
        // dBListSkills.on('value', function(snap){
        //     var skillsList = snap.val();
        //     console.log('skillsList', skillsList);
        //
        //     skillsList.push({t: b});
        // });



        function updateSkills(skill, range) {
          firebase.database().ref().child(`users/${userIdentification}`).child("skills/0").update({
            [skill]: range,
          });
        }

        updateSkills(t, b);

    } else if (skillNameInput.value.length === 0  || skillRangeInput.value.length === 0) {
        alert("Fill all fields");
    }
}

addSkillsBtn.addEventListener("click", addNewSkillBar);
