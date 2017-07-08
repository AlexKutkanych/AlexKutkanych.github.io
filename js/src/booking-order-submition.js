//proceed booking

var proceedBookingBtn = document.querySelector("#continue-booking"),
    bookingInfoBlock = document.querySelector(".booking-section__info-block"),
    bookingTableBlock = document.querySelector(".booking-section__table-block"),
    bookingLoader = document.querySelector(".booking-loader"),
    proceedBookingModal = document.querySelector(".proceed-booking__modal");

function proceedBooking(){
  bookingModalBlock.style.display = "none";
  setTimeout(showBookingLoader, 1);
  setTimeout(showProceedBookingModal, 3000);
}

function showBookingLoader(){
  bookingLoader.style.display = "block";
}

function showProceedBookingModal(){
  bookingLoader.style.display = "none";
  proceedBookingModal.style.display = "block";
}

proceedBookingBtn.addEventListener("click", proceedBooking);

//personal info booking

var orderResult = document.querySelector(".your-booking__order-result");

for (var key in orderInfo){
  var li = document.createElement('li');
  li.classList.add("order-result__list-item");
  li.innerHTML += key + ": " + key.value;
  orderResult.appendChild(li);
  // console.log(key);
}


//validate

var bookingNameField = document.querySelector("#booking__name-field"),
    bookingEmailField = document.querySelector("#booking__email-field"),
    bookingSubmitBtn = document.querySelector("#submit-booking__btn");

function validateBookingSubmition(e){
  e.preventDefault();

  //validate username
  if (!regexpUsername.test(bookingNameField.value)) {
    // signupAlertMessages[0].classList.add("show-alert-message");
    alert("sdf");
  } else {
    // signupAlertMessages[0].classList.remove("show-alert-message");
  }

  //validate email
  // if (!regexpEmail.test(bookingEmailField.value)) {
  //   signupAlertMessages[1].classList.add("show-alert-message");
  // } else {
  //   signupAlertMessages[1].classList.remove("show-alert-message");
  // }

}

bookingSubmitBtn.addEventListener("click", validateBookingSubmition);

