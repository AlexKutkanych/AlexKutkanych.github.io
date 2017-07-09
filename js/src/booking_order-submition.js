//proceed booking

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
  
  // var orderInfoFromLs = localStorage.getItem("orderInfo");
// var orderInfoParse = JSON.parse(orderInfoFromLs);



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
}

proceedBookingBtn.addEventListener("click", proceedBooking);
proceedBookingCloseBtn.addEventListener("click", closeProceedBookingModal);

//personal info booking

var orderResult = document.querySelector(".your-booking__order-result");


//validate

var bookingNameField = document.querySelector("#proceed-booking__name-field"),
    bookingEmailField = document.querySelector("#proceed-booking__email-field"),
    bookingSubmitBtn = document.querySelector("#submit-booking__btn"),
    bookingAlertMessages = document.querySelectorAll(".proceed-booking__alert-message");

function validateBookingSubmition(){
  //validate username
  if (!regexpUsername.test(bookingNameField.value)) {
    bookingAlertMessages[0].classList.add("show-alert-message");
  } else {
    bookingAlertMessages[0].classList.remove("show-alert-message");
  }

  //validate email
  if (!regexpEmail.test(bookingEmailField.value)) {
    bookingAlertMessages[1].classList.add("show-alert-message");
  } else {
    bookingAlertMessages[1].classList.remove("show-alert-message");
  }
}

function submitBooking(e){
  e.preventDefault();
  validateBookingSubmition();

  closeProceedBookingModal();
  showBookingConfirmation();
}

//show booking confirmation modal 
var bookingConfirmationModal = document.querySelector(".proceed-booking__confirm-modal");

function showBookingConfirmation(){
    bookingConfirmationModal.classList.add("proceed-booking__confirm-modal_animate-fading");
}

bookingSubmitBtn.addEventListener("click", submitBooking);


