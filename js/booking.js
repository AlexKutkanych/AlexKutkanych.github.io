console.log("asd");

var bookingBtn = document.querySelector("#booking__btn"),
    bookingModal = document.querySelector(".header-wrapper__booking-section"),
    closeBookingModalBtn = document.querySelector(".booking-section__close-btn"),
    submitBookingBtn = document.querySelector("#submit-booking"),
    continueBookingBtn = document.querySelector("#continue-booking"),
    bookingResult = document.querySelector(".info-block__result"),
    selectPeopleAmount = document.querySelector("#info-block__people-amount"),
    selectTime = document.querySelector("#info-block__select-time");
    tables = document.querySelector(".table-block__table-scheme"),
    alertMessagePeople = document.querySelector(".booking__alert-message_people"),
    alertMessageDate = document.querySelector(".booking__alert-message_date"),
    alertMessageTime = document.querySelector(".booking__alert-message_time");

function showBookingModal(){
    bookingModal.classList.toggle("header-wrapper__booking-section_show");
    bookingBtn.classList.toggle("booking__btn_active");
}

function closeBookingModal(){
    bookingModal.classList.remove("header-wrapper__booking-section_show");
    bookingBtn.classList.remove("booking__btn_active");
}

  var orderInfo = {};

  function chooseTable(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target.innerHTML;
      e.target.classList.toggle("table-chosen");
      console.log("Hello " + clickedItem);
      orderInfo.table = clickedItem;
    }
    e.stopPropagation();
  }

  function choosePeopleAmount(){
    orderInfo.people = selectPeopleAmount.value;
    orderInfo.time = selectTime.value;
    // orderInfo.time = selectTime.value;
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
    if(orderInfo.date === ''){
      alertMessageDate.style.display = "block";
    } else {
      alertMessageDate.style.display = "none";
    }
    if (orderInfo.people !== '' && orderInfo.time !== '' && orderInfo.date !== ''){
      continueBookingBtn.style.display = "block";

    }

  }


console.log(orderInfo);

bookingBtn.addEventListener("click", showBookingModal);
submitBookingBtn.addEventListener("click", choosePeopleAmount);
tables.addEventListener("click", chooseTable);
closeBookingModalBtn.addEventListener("click", closeBookingModal);
// $(document).ready(function(){
//
// $(".header-wrapper__booking-section").on("show", function () {
//   $("body").addClass("modal-open");
// }).on("hidden", function () {
//   $("body").removeClass("modal-open")
// });
// });
