//main video playback

$(document).ready(function(){

  var mainVideo = $('video');
  var videoOriginalWidth = 854;
  var videoOriginalHeight = 480;

  // re-scale image when viewport resizes
	$(window).resize(function(){

		// get the parent element size
		var containerWidth = mainVideo.parent().width();
		var containerHeight = mainVideo.parent().height();

		// use largest scale factor of horizontal/vertical
		var scaleWidth = containerWidth / videoOriginalWidth;
		var scaleHeight = containerHeight / videoOriginalHeight;
		var scale = scaleWidth > scaleHeight ? scaleWidth : scaleHeight;

		// scale the video
		mainVideo.width(scale * videoOriginalWidth);
		mainVideo.height(scale * videoOriginalHeight);

	});

  // trigger re-scale on pageload
	$(window).trigger('resize');
});


//booking block

"use strict";

var bookingBtn = document.querySelector("#booking__btn"),
    bookingModalBlock = document.querySelector(".header-wrapper__booking-section"),
    bookingModal = document.querySelector("#booking-section__modal"),
    closeBookingModalBtn = document.querySelector(".booking-section__close-btn"),
    submitBookingBtn = document.querySelector("#submit-booking"),
    continueBookingBtn = document.querySelector("#continue-booking"),
    bookingResult = document.querySelector(".info-block__result"),
    selectPeopleAmount = document.querySelector("#info-block__people-amount"),
    selectTime = document.querySelector("#info-block__select-time"),
    tables = document.querySelector(".table-block__table-scheme"),
    alertMessagePeople = document.querySelector(".booking__alert-message_people"),
    alertMessageDate = document.querySelector(".booking__alert-message_date"),
    alertMessageTime = document.querySelector(".booking__alert-message_time"),
    alertMessageTable = document.querySelector(".booking__alert-message_table"),
    days = document.querySelector(".calendar__days"),
    keys = {37: 1, 38: 1, 39: 1, 40: 1};

function showBookingModal(){
    bookingModalBlock.classList.toggle("header-wrapper__booking-section_show");
    bookingBtn.classList.toggle("booking__btn_active");
    bookingModal.style.display = "block";
    disableScroll();
}

function closeBookingModal(){
    bookingModalBlock.classList.remove("header-wrapper__booking-section_show");
    bookingBtn.classList.remove("booking__btn_active");
    bookingModal.style.display = "none";
    enableScroll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bookingModal) {
      closeBookingModal();
      closeProceedBookingModal();
    }
};

//obj for booking information

var orderInfo = {people: '', time: '', date: '',table:''};

function chooseTable(e) {
  var tablesChosen = [];
  var target = e.target;
  if (target.className == 'table-scheme__table-number') {
    var clickedItem = target.innerHTML;
    target.classList.add("table-chosen");
  } else {
    target.classList.remove("table-chosen");
  }

  //push number of table to array if it was selected

  if(!target.classList.contains("table-chosen")){
    orderInfo.table = '';
    continueBookingBtn.style.display = "none";
  } else {
    orderInfo.table = clickedItem;
  }
}


function chooseDate(e) {
  if (e.target !== e.currentTarget) {
    var chosenDate = e.target.innerHTML;
    var getMonth = document.querySelector("#calendar__month");
    orderInfo.date = getMonth.innerHTML +" "+ chosenDate;
    calendarBtn.innerHTML = orderInfo.date;
  }
}

function orderSubmition(){
  orderInfo.people = selectPeopleAmount.value;
  orderInfo.time = selectTime.value;
  var orderInfoSave = localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

  if(orderInfo.people === ''){
    alertMessagePeople.style.display = "block";
  } else {
    alertMessagePeople.style.display = "none";
  }

  if(orderInfo.time === ''){
    alertMessageTime.style.display = "block";
  } else {
    alertMessageTime.style.display = "none";
  }

  if(orderInfo.table === ''){
    alertMessageTable.style.display = "block";
  } else {
    alertMessageTable.style.display = "none";
  }


  if(calendarBtn.innerHTML === "Select date") {
    alertMessageDate.style.display = "block";
  } else {
    alertMessageDate.style.display = "none";
  }



  if (orderInfo.people !== '' && orderInfo.time !== '' && orderInfo.date !== '' && orderInfo.table !== ''){
    continueBookingBtn.style.display = "block";

  }
  calendarBlock.classList.remove("info-block__calendar_show");
}

bookingBtn.addEventListener("click", showBookingModal);
submitBookingBtn.addEventListener("click", orderSubmition);
tables.addEventListener("click", chooseTable);
closeBookingModalBtn.addEventListener("click", closeBookingModal);
days.addEventListener("click", chooseDate);



//booking calendar

var calendarBtn = document.querySelector("#info-block__date-btn"),
    calendarBlock = document.querySelector(".info-block__calendar");

function showCalendar(){
  calendarBlock.classList.toggle("info-block__calendar_show");
}

calendarBtn.addEventListener("click", showCalendar);


//proceed booking

"use strict";

var proceedBookingBtn = document.querySelector("#continue-booking"),
    bookingInfoBlock = document.querySelector(".booking-section__info-block"),
    bookingTableBlock = document.querySelector(".booking-section__table-block"),
    bookingLoader = document.querySelector(".booking-loader"),
    proceedBookingModal = document.querySelector("#proceed-booking__modal"),
    proceedBookingCloseBtn = document.querySelector(".proceed-booking__close-btn");

function proceedBooking(){
  bookingModalBlock.classList.remove("header-wrapper__booking-section_show");
  setTimeout(showBookingLoader, 1);
  setTimeout(showProceedBookingModal, 3000);
  orderSubmition();
}

function showBookingLoader(){
  bookingLoader.style.display = "block";
}

function showProceedBookingModal(){
  bookingLoader.style.display = "none";
  proceedBookingModal.classList.add("proceed-booking__modal_show");

for (var key in orderInfo){
    var li = document.createElement('li');
    li.classList.add("order-result__list-item");
    li.innerHTML += key + ":  " + orderInfo[key];
    orderResult.appendChild(li);
  }
}

function closeProceedBookingModal(){
  proceedBookingModal.classList.remove("proceed-booking__modal_show");
  bookingBtn.classList.remove("booking__btn_active");
  bookingModal.style.display = "none";
  orderResult.innerHTML = "";
  enableScroll();
}

proceedBookingBtn.addEventListener("click", proceedBooking);
proceedBookingCloseBtn.addEventListener("click", closeProceedBookingModal);

//personal info booking

var orderResult = document.querySelector(".your-booking__order-result");


//validate

var bookingNameField = document.querySelector("#proceed-booking__name-field"),
    bookingEmailField = document.querySelector("#proceed-booking__email-field"),
    bookingSubmitBtn = document.querySelector("#submit-booking__btn"),
    proceedBookingAlertMessages = document.querySelectorAll(".proceed-booking__alert-message");

function validateBookingSubmition(){
  //validate username
  if (!regexpUsername.test(bookingNameField.value)) {
    proceedBookingAlertMessages[0].classList.add("show-alert-message");
  } else {
    proceedBookingAlertMessages[0].classList.remove("show-alert-message");
  }

  //validate email
  if (!regexpEmail.test(bookingEmailField.value)) {
    proceedBookingAlertMessages[1].classList.add("show-alert-message");
  } else {
    proceedBookingAlertMessages[1].classList.remove("show-alert-message");
  }
}

function submitBooking(e){
  e.preventDefault();
  validateBookingSubmition();

  if(regexpUsername.test(bookingNameField.value) && regexpEmail.test(bookingEmailField.value)) {
    closeProceedBookingModal();
    showBookingConfirmation();
  }
}

//show booking confirmation modal
var bookingConfirmationModal = document.querySelector(".proceed-booking__confirm-modal");

function showBookingConfirmation(){
    bookingConfirmationModal.classList.add("proceed-booking__confirm-modal_animate-fading");
    setTimeout(hideBookingConfirmation, 8000);
}

function hideBookingConfirmation(){
  bookingConfirmationModal.classList.remove("proceed-booking__confirm-modal_animate-fading");
}

bookingSubmitBtn.addEventListener("click", submitBooking);

//disable scroll while booking modal

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

"use strict";

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

//events block - filtering

"use strict";

var ourEvents = document.querySelector("#our-events"),
    filterAll = ourEvents.querySelector(".filter-all"),
    filterMenu = ourEvents.querySelector(".filter-menu"),
    filterMusic = ourEvents.querySelector(".filter-music"),
    events = ourEvents.querySelectorAll(".event-content__block"),
    menuEvents = ourEvents.querySelectorAll(".event-block__menu"),
    musicEvents = ourEvents.querySelectorAll(".event-block__music"),
    otherEvents = ourEvents.querySelectorAll(".event-block__other"),
    filterLink = ourEvents.querySelectorAll(".event-filter__link"),
    //events length
    menuEventsLen = menuEvents.length,
    musicEventsLen = musicEvents.length,
    otherEventsLen = otherEvents.length,
    allEventsLen = events.length;

function showMenuEvents(e){
  e.preventDefault();
  for (var i = 0; i < musicEventsLen; i++) {
    musicEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEventsLen; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < menuEventsLen; k++) {
    menuEvents[k].style.display = "block";
  }
  filterMenu.classList.add("event-filter__link_active");
  filterAll.classList.remove("event-filter__link_active");
  filterMusic.classList.remove("event-filter__link_active");
}

function showMusicEvents(e){
  e.preventDefault();
  for (var i = 0; i < menuEventsLen; i++) {
    menuEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEventsLen; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < musicEventsLen; k++) {
    musicEvents[k].style.display = "block";
  }
  filterMenu.classList.remove("event-filter__link_active");
  filterAll.classList.remove("event-filter__link_active");
  filterMusic.classList.add("event-filter__link_active");
}

function showAllEvents(e){
  e.preventDefault();
  for (var i = 0; i < allEventsLen; i++) {
    events[i].style.display = "block";
  }
  filterMenu.classList.remove("event-filter__link_active");
  filterAll.classList.add("event-filter__link_active");
  filterMusic.classList.remove("event-filter__link_active");
}

filterMenu.addEventListener("click", showMenuEvents);

filterMusic.addEventListener("click", showMusicEvents);

filterAll.addEventListener("click", showAllEvents);

//google map init

"use strict";

function initMap() {
  var mySpot = {lat: 50.44004, lng: 30.5105};
  var map = new google.maps.Map(document.getElementById('contacts-block__google-map'), {
    zoom: 15,
    scrollwheel: false,
    center: mySpot
  });
  var marker = new google.maps.Marker({
    position: mySpot,
    map: map
  });
}

//header carousel

"use strict";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}



function showSlides(n){
	var i;
	var slides = document.querySelectorAll(".carousel__slide");
	var slidesLength = slides.length;
	if (n > slidesLength) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = slidesLength;
	}
	for (i = 0; i < slidesLength; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

var prevSlideBtn = document.querySelector(".carousel__pagination_prev");
var nextSlideBtn = document.querySelector(".carousel__pagination_next");

prevSlideBtn.addEventListener("click", function(e){
	e.preventDefault();
	plusSlides(-1);
});

nextSlideBtn.addEventListener("click", function(e){
	e.preventDefault();
	plusSlides(1);
});

// see:
// http://ejohn.org/blog/javascript-micro-templating/

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('"+ str.replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'") + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();


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
//menu-filter via Resig

"use strict";

  var fullOnlineMenu = [
    {name: 'Italian Ice-cream', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '35', classCategory: 'food-result__dessert', rating: 5},
    {name: 'Crostata di Marmellata', desc: 'Home made jam orange tarte', price: '110', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_crostata', rating: 4},
    {name: 'Semifreddo al Caramello', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '130', classCategory: 'food-result__dessert', classPicture: 'ood-result__pic_semifreddo', rating: 4},
    {name: 'Red Wine (by glass)', desc: 'Some description of this tasty red wine', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_red-wine', rating: 5},
    {name: 'Americano', desc: 'Natural black Italian coffee', price: '50', classCategory: 'food-result__beverages food-result__beverages-non-alco', classPicture: 'food-result__pic_americano', rating: 5},
    {name: 'Spritz Royal', desc: 'Signature refreshing aperitif cocktail of Gin, White Vermouth, Aperol with a dash of Prosecco', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_spritz-royal', rating: 5},
    {name: 'Negroni', desc: 'A classic aperitif cocktail found in Treviso, Italy consists of Gin, Red Vermouth and Campari', price: '55', classCategory: 'food-result__beverages food-result__beverages-alco', classPicture: 'food-result__pic_negroni', rating: 5},
    {name: 'Margherita', desc: 'Tomato sauce, Mozzarella Cheese and Basil leaves', price: '120', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_margherita', rating: 3},
    {name: 'Napoletana', desc: 'Tomato sauce, Mozzarella Cheese, Anchovies and Capers', price: '130', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_napoletana', rating: 5},
    {name: 'Diavola', desc: 'Tomato sauce, Mozzarella Cheese and Spicy Salami', price: '160', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_diavola', rating: 4},
    {name: 'Frittura mista di Pesce', desc: 'Deep fried Prawns, Anchovies, Squid and Zucchini', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_frittura', rating: 5},
    {name: 'Verdure', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '150', classCategory: 'food-result__pizza', classPicture: 'food-result__pic_verdure', rating: 5},
    {name: 'Lasagna', desc: 'Pasta Layers, Bolognese sauce, Ham, Parmesan and Mozzarella Cheese', price: '70', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_lasagna', rating: 5},
    {name: 'Tortelli di Salsiccia', desc: 'Tuscan Hand-made Ravioli filled with Home-made Sausage in Meat sauce', price: '80', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_tortelli', rating: 5},
    {name: 'Spaghetti ai Frutti di Mare', desc: 'Spaghetti with Prawns, Clams, Mussels &amp; Squid in Tomato sauce', price: '130', classCategory: 'food-result__pasta', classPicture: 'food-result__pic_spaghetti', rating: 5},
    {name: 'Farro di Mare', desc: 'Steamed Spelt with Squid,Prawns, Mussels &amp; Tomatoes, with Olive Oil, Lemon &amp; Parsley dressing served in a Parmesan Cheese Basket', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_farro', rating: 5},
    {name: 'Minestrone di verdure', desc: 'Hearty Vegetable soup', price: '75', classCategory: 'food-result__soup', classPicture: 'food-result__pic_minestrone', rating: 5},
    {name: 'Zuppa di pesce', desc: 'Seafood soup with Prawns, Squids, Clams &amp; Mussels, served with toasted bread', price: '75', classCategory: 'food-result_soup', classPicture: 'food-result__pic_zuppa-di-pesce', rating: 5},
    {name: 'Italian Ice-cream Big', desc: 'Vanilla, Coffee, Chocolate flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: '', rating: 4},
    {name: 'Italian Sorbet', desc: 'Orange, Coconut, Strawberry flavours available', price: '55', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_sorbet', rating: 2},
    {name: 'Panna Cotta', desc: 'Italian Custard Cream with Caramel', price: '70', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_panna-cotta', rating: 5},
    {name: 'Crème Brulee', desc: 'Rich custard base topped with a contrasting layer of hard caramel', price: '75', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_creme-brulee', rating: 5},
    {name: 'Tiramisu', desc: 'All-time favourite', price: '80', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tiramisu', rating: 5},
    {name: 'Tortino caldo di cioccolato', desc: 'Melting chocolate cake', price: '95', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_tortino', rating: 3},
    {name: 'Il Castagnaccio', desc: 'Classic Chestnut Tuscan Dessert. A real classic back home', price: '100', classCategory: 'food-result__dessert', classPicture: 'food-result__pic_castagnaccio', rating: 5}
  ];

  localStorage.setItem("fullOnlineMenu", JSON.stringify(fullOnlineMenu));
  var onlineMenuData = localStorage.getItem("fullOnlineMenu");
  var onlineMenu = JSON.parse(onlineMenuData);

  //write to html via resig template
  
  var results = document.getElementById("food-wrapper__result");
  results.innerHTML = tmpl("mypage", {data: onlineMenu});
    

"use strict";

//menu filtering

var closeFoodOnlineBtn = document.querySelector(".hide-online-menu-btn"),
    buyFoodOnline = document.querySelector(".our-online-menu"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    allCards = document.querySelectorAll(".food-result"),
    allCardsLen = allCards.length;
    allInputs = document.querySelectorAll(".food-filter"),
    allInputsLen = allInputs.length;
    filterForm = document.querySelector(".buy-food-online__form"),
    inputSoup = document.querySelector("#soup-appetizer"),
    inputPasta = document.querySelector("#pasta"),
    inputDesserts = document.querySelector("#dessert"),
    inputPizza = document.querySelector("#pizza"),
    inputBeverages = document.querySelector("#beverages");
    inputBeveragesAlco = document.querySelector("#alco"),
    inputBeveragesNonAlco = document.querySelector("#non-alco"),
    allInputCategory = document.querySelectorAll(".food-filter"),
    allRadioBeverages = document.querySelector(".food-filter-radio"),
    allFood = [],
    clearAllFiltersBtn = document.querySelector("#clear-filter-btn");

//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("our-online-menu__hide");
    closeFoodOnlineBtn.classList.toggle("hide-online-menu-btn__animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//push all cards to array

for(var i = 0; i < allCardsLen; i++){
    allFood.push(allCards[i]);
}


//clear all filters

function clearAllFilters(){

  for(var i = 0; i < allCardsLen; i++){
    allCards[i].style.display = "block";
  }

  for (var j = 0; j < allInputsLen; j++){
    allInputs[j].checked = false;
  }
  inputBeveragesAlco.disabled = false;
  inputBeveragesNonAlco.disabled = false;
  searchFoodInput.value = '';
}

//filter soups

function showAllSoups(){

  var filterSoup; 

  if(inputSoup.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterSoup = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__soup";
    })

    var filterSoupLen = filterSoup.length;

    for(var k = 0; k < filterSoupLen; k++){
        filterSoup[k].style.display = "block";
    }
  }
}


//filter pasta

function showAllPasta(){

  var filterPasta;

  if(inputPasta.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterPasta = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pasta";
    })

    var filterPastaLen = filterPasta.length;

    for(var k = 0; k < filterPastaLen; k++){
        filterPasta[k].style.display = "block";
    }
    
  }
}

//filter pizza

 function showAllPizza(){

  var filterPizza;

  if(inputPizza.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterPizza = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pizza";
    })

    var filterPizzaLen = filterPizza.length;

    for(var k = 0; k < filterPizzaLen; k++){
        filterPizza[k].style.display = "block";
    }
  }
}

//filter desserts

 function showAllDesserts(){

  var filterDesserts;

  if(inputDesserts.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterDesserts = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__dessert";
    })

    var filterDessertsLen = filterDesserts.length;

    for(var k = 0; k < filterDessertsLen; k++){
        filterDesserts[k].style.display = "block";
    }
    
  }
}

//filter beverages

 function showAllBeverages(){

  var filterBeverages;
  
  if(inputBeverages.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterBeverages = allFood.filter(function(food){
        return food.className.substring(12, 34) === "food-result__beverages";
    })

    var filterBeveragesLen = filterBeverages.length;

    for(var k = 0; k < filterBeveragesLen; k++){
        filterBeverages[k].style.display = "block";
    }
    
  }
}

//filter by beverage type

//disable if some other categories selected

function disableBeveragesInputs(){
  if(inputDesserts.checked == true || inputSoup.checked == true || inputPizza.checked == true || inputPasta.checked == true){
    inputBeveragesAlco.disabled = true;
    inputBeveragesNonAlco.disabled = true;
  } else if (inputBeverages.checked == true){
    inputBeveragesAlco.disabled = false;
    inputBeveragesNonAlco.disabled = false;
  }
}

//filter non-alco beverages

 function showNonAlcoBeverages(){

  var filterNonAlcoBeverages;

  if(inputBeveragesNonAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterNonAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 67) === "food-result__beverages-non-alco";
    })

    var filterNonAlcoBeveragesLen = filterNonAlcoBeverages.length;

    for(var k = 0; k < filterNonAlcoBeveragesLen; k++){
        filterNonAlcoBeverages[k].style.display = "block";
    }
  }
}

//filter alco beverages

function showAlcoBeverages(){

  var filterAlcoBeverages;

  if(inputBeveragesAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 62) === "food-result__beverages-alco";
    })

    var filterAlcoBeveragesLen = filterAlcoBeverages.length;

    for(var k = 0; k < filterAlcoBeveragesLen; k++){
        filterAlcoBeverages[k].style.display = "block";
    }
  }
}

inputSoup.addEventListener("click", showAllSoups);
inputPasta.addEventListener("click", showAllPasta);
inputPizza.addEventListener("click", showAllPizza);
inputDesserts.addEventListener("click", showAllDesserts);
inputBeverages.addEventListener("click", showAllBeverages);
inputBeveragesNonAlco.addEventListener("click", showNonAlcoBeverages);
inputBeveragesAlco.addEventListener("click", showAlcoBeverages);

filterForm.addEventListener("change", disableBeveragesInputs);
//clear all filters

clearAllFiltersBtn.addEventListener("click", clearAllFilters);




//search block

"use strict";

var searchFoodInput = document.querySelector("#search-block__search-field");


function searchFood() {
    var filter = searchFoodInput.value.toUpperCase();
    var foodResultPage = document.querySelectorAll("#food-wrapper__result");
    var foodCard = document.querySelectorAll(".food-result");
    var foodCardLen = foodCard.length;

    for (i = 0; i < foodCardLen; i++) {
        //search by name
        var foodName = foodCard[i].querySelector(".food-result__name");
        var foodDesc = foodCard[i].querySelector(".food-result__desc");
        var foodPrice = foodCard[i].querySelector(".food-result__price");
        if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1 || foodPrice.innerHTML.toUpperCase().indexOf(filter) > -1
            || foodDesc.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foodCard[i].style.display = "";
            foodResultPage[0].appendChild(foodCard[i]); 
        } else {
            foodCard[i].style.display = "none";
        }
    }

}

searchFoodInput.addEventListener("keyup", searchFood);

//menu sort

"use strict";

var sortBlock = document.querySelector("#sort-block__sorting"),
	container = document.querySelector(".food-wrapper__result"),
	contents = document.querySelectorAll(".food-result__price"),
	contentsLen = contents.length;
	rating = document.querySelectorAll(".food-result__rating"),
	ratingLen = rating.length,
	food = document.querySelector(".food-result"),
	listAscending = [],
	listDescending = [],
	listRating = [],
	listRandom = [];
	


function sortByPriceAscending() {

	for(var i = 0; i < contentsLen; i++){
	    listAscending.push(contents[i]);
	}

	listAscending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	listAscending.reverse();

	var listAscendingLen = listAscending.length;

	for(var k = 0; k < listAscendingLen; k++){
		container.insertBefore(listAscending[k].parentNode, container.firstChild);
	}
}


function sortByPriceDescending() {

	for(var i = 0; i < contentsLen; i++){
	    listDescending.push(contents[i]);
	}

	listDescending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	var listDescendingLen = listDescending.length;

	for(var k = 0; k < listDescendingLen; k++){
		container.insertBefore(listDescending[k].parentNode, container.firstChild);
	}
}

//sort by rating

function sortByRatingDescending() {

	for(var i = 0; i < ratingLen; i++){
	    listRating.push(rating[i]);
	}

	listRating.sort(function(a, b){
		var aa = parseInt(a.innerHTML);
		var bb = parseInt(b.innerHTML);
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	var listRatingLen = listRating.length;

	for(var k = 0; k < listRatingLen; k++){
		container.insertBefore(listRating[k].parentNode.parentNode.parentNode, container.firstChild);
	}
}

//sort randomly

function sortRandomly(){
	for(var i = 0; i < contentsLen; i++){
	    listRandom.push(contents[i]);
	}

	listRandom.sort(function(){
	 	return 0.5 - Math.random();
	});

	var listRandomLen = listRandom.length;

	for(var k = 0; k < listRandomLen; k++){
		container.insertBefore(listRandom[k].parentNode, container.firstChild);
	}
}

sortBlock.addEventListener("change", function(){
	if (sortBlock.value === "sort-descending"){
		sortByPriceDescending();
	} else if (sortBlock.value === "sort-ascending") {
		sortByPriceAscending();

	} else if (sortBlock.value === "sort-by-rating") {
		sortByRatingDescending();
	} else if (sortBlock.value === "Select sorting") {
		sortRandomly();
	}
});

//mobile menu

"use strict";

var menuTop = document.querySelector(".menu-top"),
    burgerBtn = document.querySelector(".mobile-menu__burger");

function showMobileMenu(){
  menuTop.classList.toggle("menu-top__active");
  burgerBtn.classList.toggle("mobile-menu__burger_open");
}

burgerBtn.addEventListener("click", showMobileMenu);


//mobile open submenu
var menuItemMenu = document.querySelector("#menu-top__menu"),
    menuSubmenuMenu = document.querySelector("#menu-top__submenu-menu"),
    menuItemContacts = document.querySelector("#menu-top__contacts"),
    menuSubmenuContacts = document.querySelector("#menu-top__submenu-contacts"),
    submenuMenu = document.querySelectorAll(".mobile-menu__with-submenu")[0];
    submenuContacts = document.querySelectorAll(".mobile-menu__with-submenu")[1];


$(window).resize(function() {
  if ($(window).width() < 768) {
    menuItemMenu.addEventListener("click", function(e){
      e.preventDefault();
      menuSubmenuMenu.classList.toggle("menu__submenu-show-menu");
      submenuMenu.classList.toggle("mobile-menu__with-submenu_close");
    });
    menuItemContacts.addEventListener("click", function(e){
      e.preventDefault();
      menuSubmenuContacts.classList.toggle("menu__submenu-show-menu");
      submenuContacts.classList.toggle("mobile-menu__with-submenu_close");
    });
    menuSubmenuMenu.classList.remove("menu__submenu_hover");
    menuSubmenuContacts.classList.remove("menu__submenu_hover");
  } else if ($(window).width() > 769) {
     menuItemMenu.removeEventListener("click", function(){});
     menuItemContacts.removeEventListener("click", function(){});
     menuSubmenuMenu.classList.add("menu__submenu_hover");
     menuSubmenuContacts.classList.add("menu__submenu_hover");
   }
});


//news block templating

"use strict";

  var allNews = [
    {image: 'img/events/summer-terrasse.jpg', imageAltern: 'summer terrasse', heading: 'Summer terrasse is open', desc: 'Luckily the summer is coming, so you can spend time with your friends or family having a meal outside.', postedTimePast: '5 hours ago'},
    {image: 'img/events/children-birthday.jpg', imageAltern: 'birthday cakes', heading: 'Make your children happy', desc: 'Now you can organize a wonderfull birtday for your children.', postedTimePast: '10 days ago'},
    {image: 'img/events/wedding.jpg', imageAltern: 'wedding', heading: 'Best wedding with us', desc: 'Our restaurant can place up to 60 elite guests inside. Let us make the most important day of your life special.', postedTimePast: '28 days ago'},
    {image: 'img/events/birthday.jpg', imageAltern: 'birthday cakes', heading: 'Birthday party can be even better', desc: 'Having boring birthday parties? Nah. We can serve you with the best Italian food and drinks. Candy bar is free.', postedTimePast: 'a month ago'},
  ];

  localStorage.setItem("allNews", JSON.stringify(allNews));
  var allNewsData = localStorage.getItem("allNews");
  var ourNews = JSON.parse(allNewsData);

  //write to html via resig template
  
  var results = document.getElementById("news-content");
  results.innerHTML = tmpl("mypage1", {data: ourNews});
  
  
//registration

//appearance

"use strict";

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
    setTimeout(hideSentEmailModal, 8000);
}

function hideSentEmailModal(){
      confirmEmailModal.classList.remove("header-wrapper__registration-confirm-modal_animate-fading");
}

signupBtn.addEventListener("click", toLocalStorage);


//prevent enter key press from form submition

function stopEnterKey(e) { 
  if (e.keyCode == 13)  {
    return false;
  } 
} 

joinUsModal.onkeypress = stopEnterKey;
//social btns settings

//twitter btn

"use strict";

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i);if(j){var k=h.getAttribute("xlink:href")||h.getAttribute("href");!k&&g.attributeName&&(k=h.getAttribute(g.attributeName));if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});

svg4everybody();

//creating tabs

"use strict";

var newsTab = ourEvents.querySelector(".tab-news__heading"),
    eventsTab = ourEvents.querySelector(".tab-events__heading"),
    newsBlock = ourEvents.querySelector("#news-content"),
    eventsBlock = ourEvents.querySelector("#event-content");

newsTab.addEventListener("click", function(e){
  e.preventDefault();
  newsBlock.classList.add("show-content");
  eventsBlock.classList.remove("show-content");
  this.classList.add("tab-active");
  eventsTab.classList.remove("tab-active");
});

eventsTab.addEventListener("click", function(e){
  e.preventDefault();
  eventsBlock.classList.add("show-content");
  newsBlock.classList.remove("show-content");
  this.classList.add("tab-active");
  newsTab.classList.remove("tab-active");
});

//to top button

"use strict";

window.onscroll = function(){
	scrollScreen();
};

var html = document.querySelector("html");
var toTopButton = document.querySelector("#to-top-button");

function scrollScreen(){
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
